import { createRoute, z } from '@hono/zod-openapi'
import { APP, inMemDB, operationResponse, validationResponse } from 'api/app';
import {
  EventTypeSchema as EventTypeSchemaPrimitive,
  sampleEventTypes,
} from '~/routes/dashboard.event-types._index';

const EventTypeSchema = EventTypeSchemaPrimitive.openapi("EventType", {
  examples: sampleEventTypes
})

export const registerEventTypesAPIs = (app: APP) => {
  app.openapi(createRoute({
    tags: ["Event Type"],
    summary: "列出 Event Type",
    method: 'get',
    path: '/event-types',
    responses: {
      200: {
        content: {
          'application/json': {
            schema: z.array(EventTypeSchema),
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
};
