import { Calendar, Copy, ExternalLink, Frame, Link, LucideIcon, Settings } from "lucide-react";

export const navTitles: {
  [K in typeof navMain[number]['url']]: string;
} = {
  "/dashboard/event-types": "活动类型",
  "/dashboard/bookings": "预约",
}

export const navMain = [
  {
    title: "活动类型",
    url: "/dashboard/event-types",
    icon: Link,
    isActive: true,
  },
  {
    title: "预约",
    url: "/dashboard/bookings",
    icon: Calendar,
  },
];

export const navSecondary: {
  title: string
  url: string
  icon: LucideIcon
}[] = [
    {
      title: "查看访客视角页面",
      url: "#",
      icon: ExternalLink
    },
    {
      title: "复制公共页面链接",
      url: "#",
      icon: Copy
    },
    {
      title: "设置",
      url: "#",
      icon: Settings
    }
  ]

export const user: {
  name: string
  email: string
  avatar: string
} = {
  name: "Nico",
  email: "nicognaw@outlook.com",
  avatar: "https://avatars.githubusercontent.com/u/66731869?s=40&v=4",
}
