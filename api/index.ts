import { createRoute, OpenAPIHono, z } from '@hono/zod-openapi'
import { apiReference } from '@scalar/hono-api-reference'
import { EventTypeSchema, sampleEventTypes } from '~/routes/dashboard.event-types._index';

const operationResultSchema = z.object({
  success: z.boolean()
})

export const validationResponse = {
  400: {
    content: {
      'application/json': {
        schema: z.object({
          error: z.object({
            target: z.unknown(),
            success: z.literal(false),
            error: z.unknown(),
          }).optional(),
        }),
      },
    },
    description: 'Returns an error',
  }
}

const operationResponse = {
  200: {
    content: {
      'application/json': {
        schema: operationResultSchema
      },
    },
    description: '操作结果',
  },
}

const inMemDB: {
  EventType: z.infer<typeof EventTypeSchema>[],
} = {
  EventType: [],
};

sampleEventTypes.forEach((value) => {
  inMemDB.EventType.push(structuredClone(value));
})

export default
  new OpenAPIHono({
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
  })
    .openapi(createRoute({
      tags: ["Event Type"],
      summary: "列出 Event Type",
      method: 'get',
      path: '/event-types',
      responses: {
        200: {
          content: {
            'application/json': {
              schema: z.array(EventTypeSchema.openapi("EventType", {
                examples: sampleEventTypes
              })),
              example: sampleEventTypes,
            },
          },
          description: '列出所有活动类型',
        },
      },
    }),
      (c) => {
        return c.json(
          inMemDB.EventType,
          200 // You should specify the status code even if it is 200.
        )
      })
    .openapi(createRoute({
      tags: ["Event Type"],
      summary: "创建 Event Type",
      method: 'post',
      path: '/create-event-type',
      responses: operationResponse,
    }),
      (c) => {
        const id = inMemDB.EventType.length + 2;
        inMemDB.EventType.push({
          id,
          description: '',
          title: 'New event type',
          url: `/book/nico/event-${id}`,
          duration: 15,
          location: 'skype'
        })
        return c.json(
          {
            success: true,
          },
          200
        )
      })
    .openapi(createRoute({
      tags: ["Event Type"],
      summary: "更新 Event Type",
      method: 'post',
      path: '/update-event-types',
      request: {
        body: {
          content: {
            'application/json': {
              schema: EventTypeSchema
            }
          }
        }
      },
      responses: {
        ...operationResponse,
        ...validationResponse,
      },
    }),
      (c) => {
        const updated = c.req.valid('json')
        const idx = inMemDB.EventType.findIndex(item => item.id === updated.id)
        inMemDB.EventType[idx] = updated
        return c.json(
          {
            success: true,
          },
          200
        )
      })
    .openapi(createRoute({
      tags: ["Event Type"],
      summary: "删除 Event Type",
      method: 'post',
      path: '/delete-event-types',
      request: {
        body: {
          content: {
            'application/json': {
              schema: EventTypeSchema.partial()
            }
          }
        }
      },
      responses: {
        ...operationResponse,
        ...validationResponse,
      },
    }),
      (c) => {
        const { id } = c.req.valid('json')
        inMemDB.EventType = inMemDB.EventType.filter(item => item.id !== id)
        return c.json(
          {
            success: true,
          },
          200
        )
      })
    .doc31('/openapi.json', { openapi: '3.1.0', info: { title: '两句', version: '1' } })
    .get('/reference', apiReference({ pageTitle: "两句 API", spec: { url: '/openapi.json' } }))
