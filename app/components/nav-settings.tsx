import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { SettingsIcon } from "lucide-react"
import { SidebarMenuButton } from "./ui/sidebar"
import { useAPIStore } from "~/lib/api"
import { z } from "zod"
import { useRef, useState } from "react"
import { cn } from "~/lib/utils"
import { useSearchParams } from "@remix-run/react"

export function Settings() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [valid, setValid] = useState(true);
  const addr = useAPIStore((state) => state.addr);
  const updateAddr = useAPIStore((state) => state.updateAddr);
  const [open, setOpen] = useState((searchParams.get("settings") === "true"));
  const inputRef = useRef<HTMLInputElement>(null);

  const tryChangeOpen = (open: boolean) => {
    if (!open && !valid) {
      setTimeout(() => inputRef?.current?.focus(), 0);
      setOpen(true);
      return;
    }
    setOpen(open);

    setSearchParams((prev) => {
      open ? prev.set("settings", "true") : prev.delete("settings");
      return prev;
    });
  };

  return <Dialog open={open} onOpenChange={tryChangeOpen}>
    {<SidebarMenuButton asChild size="sm">
      <DialogTrigger asChild>
        <button>
          <SettingsIcon />
          <span>设置</span>
        </button>
      </DialogTrigger>
    </SidebarMenuButton>}
    <DialogContent>
      <DialogHeader>
        <DialogTitle>设置</DialogTitle>
        <DialogDescription>
          配置后端 API 地址。
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right text-nowrap">
            后端 API 地址
          </Label>
          <Input
            id="name"
            type="text"
            defaultValue={addr}
            ref={inputRef}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                tryChangeOpen(false);
              }
            }}
            onChange={(e) => {
              const parsed = z
                .string()
                .url()
                .transform((value) => {
                  if (!value.startsWith("http://") && !value.startsWith("https://")) {
                    e.target.value = `http://${value}`;
                    return `http://${value}`;
                  }
                  return value;
                })
                .safeParse(e.target.value);
              if (parsed.success) {
                setValid(true);
                updateAddr(e.target.value);
              } else {
                setValid(false);
              }
            }}
            className={cn("col-span-3", (!valid) && "focus-visible:ring-destructive")}
          />
        </div>
      </div>
    </DialogContent>
  </Dialog>
}
