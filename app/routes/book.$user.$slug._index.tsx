import { Calendar } from "~/components/calendar";

import {
  type CalendarDate,
  getLocalTimeZone,
  getWeeksInMonth,
  today,
} from "@internationalized/date";
import type { DateValue } from "@react-aria/calendar";
import { useLocale } from "@react-aria/i18n";
import * as React from "react";
import { FormPanel } from "~/components/calendar/form-panel";
import { LeftPanel } from "~/components/calendar/left-panel";
import { RightPanel } from "~/components/calendar/right-panel";
import { useSearchParams } from "@remix-run/react";
import { TooltipProvider } from "~/components/ui/tooltip";
import { Card } from "~/components/ui/card";


export default function Page() {
  const { locale } = useLocale();
  const [showForm, setShowForm] = React.useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const dateParam = searchParams.get("date");
  const slotParam = searchParams.get("slot");

  const [timeZone, setTimeZone] = React.useState("America/New_York");
  const [date, setDate] = React.useState(today(getLocalTimeZone()));

  const [focusedDate, setFocusedDate] = React.useState<CalendarDate | null>(
    date,
  );

  const weeksInMonth = getWeeksInMonth(focusedDate as DateValue, locale);

  const handleChangeDate = React.useCallback((date: DateValue) => {
    setDate(date as CalendarDate);
    const params = new URLSearchParams();
    params.set("date", date.toDate(timeZone).toISOString().split("T")[0]);
    setSearchParams(params, {
      preventScrollReset: true,
      replace: true,
    });
  }, [timeZone, setSearchParams]);

  React.useEffect(() => {
    setShowForm(!!dateParam && !!slotParam);
    if (!dateParam) {
      handleChangeDate(date);
    }
  }, [searchParams, date, dateParam, slotParam, handleChangeDate]);


  const handleChangeAvailableTime = (time: string) => {
    const timeValue = time.split(":").join(" ");

    const match = timeValue.match(/^(\d{1,2}) (\d{2})([ap]m)?$/i);
    if (!match) {
      console.error("Invalid time format");
      return null;
    }

    let hours = Number.parseInt(match[1]);
    const minutes = Number.parseInt(match[2]);
    const isPM = match[3] && match[3].toLowerCase() === "pm";

    if (isPM && (hours < 1 || hours > 12)) {
      console.error("Time out of range (1-12) in 12-hour format");
      return null;
    }

    if (isPM && hours !== 12) {
      hours += 12;
    } else if (!isPM && hours === 12) {
      hours = 0;
    }

    const currentDate = date.toDate(timeZone);
    currentDate.setHours(hours, minutes);

    searchParams.set("slot", currentDate.toISOString());

    setSearchParams(searchParams, {
      preventScrollReset: true,
      replace: true,
    });
  };


  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <Card className="mx-auto">
        <TooltipProvider delayDuration={0}>
          <div className="w-full bg-gray-1 px-8 py-6 rounded-md max-w-max mx-auto">
            <div className="flex gap-6">
              <LeftPanel
                showForm={showForm}
                timeZone={timeZone}
                setTimeZone={setTimeZone}
              />
              {!showForm ? (
                <>
                  <Calendar
                    minValue={today(getLocalTimeZone())}
                    defaultValue={today(getLocalTimeZone())}
                    value={date}
                    onChange={handleChangeDate}
                    onFocusChange={(focused) => setFocusedDate(focused)}
                  />
                  <RightPanel
                    {...{ date, timeZone, weeksInMonth, handleChangeAvailableTime }}
                  />
                </>
              ) : (
                <FormPanel />
              )}
            </div>
          </div>
        </TooltipProvider>
      </Card>
    </div>
  );
}
