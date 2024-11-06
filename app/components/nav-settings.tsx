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

export function Settings() {
  const addr = useAPIStore((state) => state.addr);
  const updateAddr = useAPIStore((state) => state.updateAddr);

  return <Dialog>
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
            defaultValue={addr}
            onChange={(e) => {
              updateAddr(e.target.value);
            }}
            className="col-span-3"
          />
        </div>
      </div>
    </DialogContent>
  </Dialog>
}
