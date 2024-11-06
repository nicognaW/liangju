import { OpenAPIHono, z } from '@hono/zod-openapi'
import { apiReference } from '@scalar/hono-api-reference'
import { sampleEventTypes } from '~/routes/dashboard.event-types._index';
import {
  eventTypeSchema,
  operationResultSchema as operationResultSchemaPrimitive,
  validationErrorSchema as validationErrorSchemaPrimitive,
} from "~/lib/schemas";
import { registerEventTypesAPIs } from './event-types';
import { Env } from 'hono/types';
import { cors } from 'hono/cors'

export type APP = OpenAPIHono<Env, NonNullable<unknown>, "/">;
const operationResultSchema = operationResultSchemaPrimitive.openapi("操作结果", {})
const validationErrorSchema = validationErrorSchemaPrimitive.openapi("请求数据验证错误", {});

export const validationResponse = {
  400: {
    content: {
      'application/json': {
        schema: validationErrorSchema,
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
  EventType: z.infer<typeof eventTypeSchema>[],
} = {
  EventType: [],
};

sampleEventTypes.forEach((value) => {
  inMemDB.EventType.push(structuredClone(value));
})

const app = new OpenAPIHono({
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

app
  .doc31('/openapi.json', { openapi: '3.1.0', info: { title: '两句', version: '1' } })
  .get('/reference', apiReference({ pageTitle: "两句 API", spec: { url: '/openapi.json' } }));

export default {
  ...app,
  port: 10011,
}
