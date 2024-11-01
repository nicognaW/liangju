import { useNavigate } from "@remix-run/react";
import { useEffect } from "react";

export default function Page() {
  const navigate = useNavigate();


  useEffect(() => navigate("/dashboard/event-types"));

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0 w-full h-full">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
    </div>
  );
}
