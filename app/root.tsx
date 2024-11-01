import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import { Skeleton } from "./components/ui/skeleton";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function HydrateFallback() {
  return <div className="w-full h-screen flex">
    <Skeleton className="rounded-none w-[224px] h-full p-4 flex flex-col items-center justify-between">
      <div className="flex flex-col gap-2">
        <Skeleton className="rounded-md w-[199px] h-[32px]" />
        <Skeleton className="rounded-md w-[199px] h-[180px]" />
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="rounded-md w-[199px] h-[220px]" />
        <Skeleton className="rounded-md w-[199px] h-[140px]" />
      </div>
    </Skeleton>
    <Skeleton className="rounded-none ml-0.5 w-full h-full p-4 space-y-8">
      <Skeleton className="h-[48px] w-full" />
      <Skeleton className="h-[533px] w-full" />
    </Skeleton>
  </div>;
}
