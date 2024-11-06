import { redirect } from "@remix-run/react";
import { listEventTypes, newEventType } from "~/lib/api";

export const clientAction = async () => {
  await newEventType();
  const all = await listEventTypes();
  return redirect(`/dashboard/event-types/${all[all.length - 1].id}`);
}
