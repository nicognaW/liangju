import { OpenAPIHono, z } from '@hono/zod-openapi'
import { apiReference } from '@scalar/hono-api-reference'
import { EventTypeSchema, sampleEventTypes } from '~/routes/dashboard.event-types._index';
import { registerEventTypesAPIs } from './event-types';
import { Env } from 'hono/types';
import { cors } from 'hono/cors'


const operationResultSchema = z.object({
  success: z.boolean()
}).openapi("操作结果", {})

const ValidationErrorSchema = z.object({
  error: z.object({
    target: z.unknown(),
    success: z.literal(false),
    error: z.unknown(),
  }),
}).optional().openapi("请求数据验证错误", {});

export const validationResponse = {
  400: {
    content: {
      'application/json': {
        schema: ValidationErrorSchema,
      },
    },
    description: 'Validation error',
  }
}

export const operationResponse = {
  200: {
    content: {
      'application/json': {
        schema: operationResultSchema
      },
    },
    description: '操作结果',
  },
}

export const inMemDB: {
  EventType: z.infer<typeof EventTypeSchema>[],
} = {
  EventType: [],
};

sampleEventTypes.forEach((value) => {
  inMemDB.EventType.push(structuredClone(value));
})

export const app = new OpenAPIHono({
  defaultHook: (result, c) => {
    if (!result.success) {
      return c.json(
        {
          error: result,
        },
        400
      )
    }
  },
});

app.use('*', cors({
  origin: '*',
  allowMethods: ['POST', 'GET', 'OPTIONS'],
  exposeHeaders: ['Content-Length'],
  credentials: true,
}))

registerEventTypesAPIs(app);

export type APP = OpenAPIHono<Env, NonNullable<unknown>, "/">;

app
  .doc31('/openapi.json', { openapi: '3.1.0', info: { title: '两句', version: '1' } })
  .get('/reference', apiReference({ pageTitle: "两句 API", spec: { url: '/openapi.json' } }));

export default {
  ...app,
  port: 10011,
} 
