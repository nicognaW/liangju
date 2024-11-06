import { z } from 'zod'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { EventTypeSchema } from '~/routes/dashboard.event-types._index'

export const useAPIStore = create<{
  addr: string
  updateAddr: (newAddr: string) => void
}>()(devtools(persist(
  (set) => ({
    addr: "http://localhost:10011",
    updateAddr: (newAddr: string) => set({ addr: newAddr }),
  }), { name: "api" }
)))

export async function listEventTypes(): Promise<z.infer<typeof EventTypeSchema>[]> {
  const { addr } = useAPIStore.getState();
  const resp = await fetch(new URL("/event-types", addr), {});
  const respText = await resp.text();
  const respJson = JSON.parse(respText);
  const parsed = await z.array(EventTypeSchema).parseAsync(respJson);
  return parsed;
}
