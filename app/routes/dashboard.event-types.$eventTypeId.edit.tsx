import { ClientActionFunctionArgs, redirect } from "@remix-run/react";
import { editEventType } from "~/lib/api";

export const clientAction = async ({
  request,
  params,
}: ClientActionFunctionArgs) => {
  const { eventTypeId } = params;
  if (eventTypeId === undefined) throw new Error("Invalid ID to delete");
  await editEventType(await request.json());
  return redirect(`/dashboard/event-types`);
}

export default function Page() {
  return <></>;
}
