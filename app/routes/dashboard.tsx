import { AppSidebar } from "~/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "~/components/ui/sidebar"

import { Outlet, useLocation } from "@remix-run/react";
import { navTitles } from "~/truths";

export default function Page() {
  const location = useLocation();

  if (!location.pathname.startsWith("/dashboard")) {
    throw new Error("location.path does not start with \"/dashboard\" under dashboard route, this should never happened");
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <h2 className="truncate font-light tracking-wide text-xl">{
              navTitles[location.pathname] ?? location.pathname.substring(location.pathname.indexOf("/dashboard") + 10)
            }</h2>
          </div>
        </header>
        <section className="w-full h-full">
          <Outlet />
        </section>
      </SidebarInset>
    </SidebarProvider>
  )
}
