import { z } from "zod"
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod"
import { EventTypeSchema, LocationValues, ZLocation } from "./dashboard.event-types._index";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"

const SampleEventType: z.infer<typeof EventTypeSchema> = { id: 1, title: "15 Min Meeting", url: "/15min", description: "A 15 minutes quick talk.", duration: 15, location: "skype" };

export default function Page() {
  const data = SampleEventType;

  const formSchema = z.object({
    id: z.number().gt(0),
    title: z.string().min(1),
    url: z.string().min(2).startsWith("/"),
    description: z.string().min(0),
    duration: z.coerce.number().gt(5),
    location: ZLocation,
  })

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...data,
    }
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div className="max-w-full px-2 py-4 lg:px-6 space-y-4">
        <div className="flex justify-between">
          <h2 className="text-2xl sm:px-4">编辑</h2>
          <Button type="submit">保存</Button>
        </div>
        <div className="border-subtle space-y-6 rounded-lg border p-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>标题</FormLabel>
                <FormControl>
                  <Input placeholder="Meeting..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>介绍</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>URL</FormLabel>
                <div className="group relative mb-1 flex items-center rounded-md transition">
                  <div className="border-default h-9 border px-3 transition bg-accent rounded-l-md">
                    <div className="min-h-9 flex flex-col justify-center text-sm leading-7">
                      <span className="flex max-w-2xl overflow-y-auto whitespace-nowrap">
                        cal.com/nico-ng/
                      </span>
                    </div>
                  </div>
                  <FormControl>
                    <Input className="mb-2 block h-9 rounded-md border px-3 py-2 text-sm leading-4 transition w-full rounded-l-none border-l-0 !my-0" {...field} />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="border-subtle space-y-6 rounded-lg border p-6">
          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>时长</FormLabel>
                <div className="group relative mb-1 flex items-center rounded-md transition">
                  <FormControl>
                    <Input type="number" className="mb-2 block h-9 rounded-md border px-3 py-2 text-sm leading-4 transition rounded-r-none border-r-0 mr-[1px] !my-0" {...field} />
                  </FormControl>
                  <div className="h-9 border px-3 transition rounded-r-md">
                    <div className="min-h-9 flex flex-col justify-center text-sm leading-7">
                      <span className="flex max-w-2xl overflow-y-auto whitespace-nowrap">
                        分钟
                      </span>
                    </div>
                  </div>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="border-subtle space-y-6 rounded-lg border p-6">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>地点</FormLabel>
                <div className="flex items-center gap-2">
                  <FormControl>
                    <Select {...field}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {LocationValues.map((value, index) => <SelectItem key={index} value={value}>{value.charAt(0).toUpperCase() + value.slice(1)}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </form>
  </Form >;
}
