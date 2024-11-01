import { Link } from "@remix-run/react";
import { Clock, ExternalLink, LinkIcon, MoreHorizontal } from "lucide-react";
import { z } from "zod";
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export const LocationValues = ["skype", "zoom", "phone"] as const;
export const ZLocation = z.enum(LocationValues);
type Location = z.infer<typeof ZLocation>;

export interface EventType {
  id: number;
  title: string;
  url: string;
  description: string;
  duration: number;
  location: Location
}

const eventTypes: EventType[] = [
  { id: 1, title: "15 Min Meeting", url: "/book/nico/15min", description: "A 15 minutes quick talk.", duration: 15, location: "skype" },
  { id: 2, title: "30 Min Meeting", url: "/book/nico/30min", description: "", duration: 30, location: "skype" },
  { id: 3, title: "Secret Meeting", url: "/book/nico/secret", description: "", duration: 15, location: "skype" },
];

export default function Page() {

  return (
    <div className="px-2 lg:px-6 space-y-4">
      <div className="flex justify-between">
        <Input
          placeholder="搜索"
          className="max-w-sm"
        />
        <Button>创建</Button>
      </div>
      <ul className="border-subtle flex flex-col overflow-hidden rounded-md border divide-subtle !static w-full divide-y">
        {eventTypes.map((item, index) =>
          <li key={index}>
            <div className="hover:bg-muted p-4 group flex w-full max-w-full items-center justify-between overflow-hidden px-4 py-4 sm:px-6">
              <Link to={`/dashboard/event-types/${item.id}`} className="flex flex-col w-full">
                <div>
                  <span className="text-primary font-semibold mr-1">{item.title}</span>
                  <small className="text-muted-foreground font-normal leading-4 sm:inline">{item.url}</small>
                </div>
                <span className="text-muted-foreground break-words py-1 text-sm font-normal line-clamp-4">{item.description}</span>
                <div className="mt-2 flex flex-wrap gap-x-2 gap-y-1">
                  <Badge className="font-medium inline-flex items-center justify-center rounded gap-x-1 py-1 px-1.5 text-xs leading-3 bg-sidebar-accent text-sidebar-accent-foreground" variant="secondary">
                    <Clock className="w-3 h-3" />
                    <span>
                      {item.duration}m
                    </span>
                  </Badge>
                </div>
              </Link>
              <div>
                <div className="flex [&>*:first-child]:ml-0 [&>*:first-child]:rounded-l-md [&>*:first-child]:border-l [&>*:last-child]:rounded-r-md [&>a]:-ml-[1px] hover:[&>a]:z-[1] [&>button]:-ml-[1px] hover:[&>button]:z-[1] [&_a]:rounded-none [&_button]:rounded-none">
                  <Link className="rounded-l-md whitespace-nowrap items-center text-sm font-medium relative rounded-md transition disabled:cursor-not-allowed flex justify-center text-accent-foreground border border-default bg-white hover:bg-muted disabled:border-subtle disabled:bg-opacity-30 disabled:text-muted disabled:hover:bg-opacity-30 disabled:hover:text-muted disabled:hover:border-subtle disabled:hover:bg-white h-9 px-4 py-2.5 min-h-[36px] min-w-[36px] !p-2 hover:border-default" to={item.url}>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                  <button className="whitespace-nowrap items-center text-sm font-medium relative rounded-md transition disabled:cursor-not-allowed flex justify-center text-accent-foreground border border-default bg-white hover:bg-muted disabled:border-subtle disabled:bg-opacity-30 disabled:text-muted disabled:hover:bg-opacity-30 disabled:hover:text-muted disabled:hover:border-subtle disabled:hover:bg-white h-9 px-4 py-2.5 min-h-[36px] min-w-[36px] !p-2 hover:border-default">
                    <LinkIcon className="w-4 h-4" />
                  </button>
                  <button className="whitespace-nowrap items-center text-sm font-medium relative rounded-md transition disabled:cursor-not-allowed flex justify-center text-accent-foreground border border-default bg-white hover:bg-muted disabled:border-subtle disabled:bg-opacity-30 disabled:text-muted disabled:hover:bg-opacity-30 disabled:hover:text-muted disabled:hover:border-subtle disabled:hover:bg-white h-9 px-4 py-2.5 min-h-[36px] min-w-[36px] !p-2 hover:border-default">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}
