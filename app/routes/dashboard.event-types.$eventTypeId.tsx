import { useParams } from "@remix-run/react";

export default function Page() {
  let { eventTypeId } = useParams();

  return <>ID: {eventTypeId}</>;
}
