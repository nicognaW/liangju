import { z } from "zod";

export const operationResultSchema = z.object({
  success: z.boolean()
})

export const validationErrorSchema = z.object({
  error: z.object({
    target: z.unknown(),
    success: z.literal(false),
    error: z.unknown(),
  }),
}).optional();

export const LocationValues = ["skype", "zoom", "phone"] as const;
export const ZLocation = z.enum(LocationValues);

export const eventTypeSchema = z.object({
  id: z.coerce.number(),
  title: z.string(),
  url: z.string(),
  description: z.string(),
  duration: z.coerce.number(),
  location: ZLocation,
});
