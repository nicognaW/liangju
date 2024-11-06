import { ClientActionFunctionArgs, redirect } from "@remix-run/react";
import { deleteEventType } from "~/lib/api";

export const clientAction = async ({
  params,
}: ClientActionFunctionArgs) => {
  const { eventTypeId } = params;
  if (eventTypeId === undefined) throw new Error("Invalid ID to delete");
  await deleteEventType(eventTypeId);
  return redirect(`/dashboard/event-types`);
}
