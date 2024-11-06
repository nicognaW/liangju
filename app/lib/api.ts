import { z } from 'zod'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { eventTypeSchema, operationResultSchema } from "./schemas"

export const useAPIStore = create<{
  addr: string
  updateAddr: (newAddr: string) => void
}>()(devtools(persist(
  (set) => ({
    addr: "http://localhost:10011",
    updateAddr: (newAddr: string) => set({ addr: newAddr }),
  }), { name: "api" }
)))

async function fetchAPI<RP, RQ = unknown>(
  path: string,
  schema: z.Schema<RP>,
  init?: RequestInit,
  bodyData?: RQ,
): Promise<RP> {
  const { addr } = useAPIStore.getState();
  const options: RequestInit = {
    method: bodyData ? "POST" : (init?.method ?? "GET"),
    headers: bodyData ? { "Content-Type": "application/json" } : undefined,
    body: bodyData ? JSON.stringify(bodyData) : undefined,
    ...init,
  };
  const resp = await fetch(new URL(path, addr), options);
  const respText = await resp.text();
  const respJson = JSON.parse(respText);
  const parsed = await schema.parseAsync(respJson);
  return parsed
}

export async function listEventTypes() {
  return fetchAPI("/event-types", z.array(eventTypeSchema));
}

export async function newEventType() {
  return fetchAPI("/create-event-type", operationResultSchema, {
    method: "POST",
  });
}

export async function deleteEventType(id: string) {
  return fetchAPI("/delete-event-types", operationResultSchema, {}, { id });
}
