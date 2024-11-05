import { describe, test, expect } from 'vitest';
import app from './index';
import { sampleEventTypes } from '~/routes/dashboard.event-types._index';

const MOCK_ENV = {
  API_HOST: 'example.com',
};

describe('Event Type API - Full Process', () => {
  test('Full CRUD process with verification', async () => {
    // Step 1: List all event types and verify they match the sample data
    let res = await app.request('/event-types', {}, MOCK_ENV);
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data).toEqual(sampleEventTypes);

    // Step 2: Add a new event type
    res = await app.request('/create-event-type', { method: 'POST' }, MOCK_ENV);
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ success: true });

    // Verify the new event type is added
    let listRes = await app.request('/event-types', {}, MOCK_ENV);
    let updatedData = await listRes.json();
    expect(updatedData.length).toBe(sampleEventTypes.length + 1);
    const newEventType = updatedData[updatedData.length - 1]; // Get the last added event type

    // Step 3: Update the new event type with specific test information
    const updatedEventType = {
      ...newEventType,
      title: 'Test Updated Event',
      description: 'This is a test update',
    };
    res = await app.request('/update-event-types', {
      method: 'POST',
      body: JSON.stringify(updatedEventType),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    }, MOCK_ENV);
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ success: true });

    // Verify the new event type is updated
    listRes = await app.request('/event-types', {}, MOCK_ENV);
    updatedData = await listRes.json();
    expect(updatedData[updatedData.length - 1]).toMatchObject(updatedEventType);

    // Step 4: Delete the new event type
    res = await app.request('/delete-event-types', {
      method: 'POST',
      body: JSON.stringify({ id: newEventType.id }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    }, MOCK_ENV);
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ success: true });

    // Verify the new event type is deleted
    listRes = await app.request('/event-types', {}, MOCK_ENV);
    updatedData = await listRes.json();
    expect(updatedData.find((item: { id: number }) => item.id === newEventType.id)).toBeUndefined();

    // Step 5: Delete all remaining event types in a loop
    for (const event of updatedData) {
      res = await app.request('/delete-event-types', {
        method: 'POST',
        body: JSON.stringify({ id: event.id }),
        headers: new Headers({ 'Content-Type': 'application/json' }),
      }, MOCK_ENV);
      expect(res.status).toBe(200);
      expect(await res.json()).toEqual({ success: true });
    }

    // Verify no event types are left
    listRes = await app.request('/event-types', {}, MOCK_ENV);
    updatedData = await listRes.json();
    expect(updatedData.length).toBe(0);

    // Step 6: Add, update, and delete a single event type to ensure functionality
    // Add a new event type
    res = await app.request('/create-event-type', { method: 'POST' }, MOCK_ENV);
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ success: true });

    // Get the newly added event type
    listRes = await app.request('/event-types', {}, MOCK_ENV);
    updatedData = await listRes.json();
    const lastEventType = updatedData[updatedData.length - 1];

    // Update the new event type
    const lastUpdatedEventType = {
      ...lastEventType,
      title: 'Final Test Update',
      description: 'Final test update description',
    };
    res = await app.request('/update-event-types', {
      method: 'POST',
      body: JSON.stringify(lastUpdatedEventType),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    }, MOCK_ENV);
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ success: true });

    // Verify the last event type is updated
    listRes = await app.request('/event-types', {}, MOCK_ENV);
    updatedData = await listRes.json();
    expect(updatedData[updatedData.length - 1]).toMatchObject(lastUpdatedEventType);

    // Delete the last event type
    res = await app.request('/delete-event-types', {
      method: 'POST',
      body: JSON.stringify({ id: lastEventType.id }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    }, MOCK_ENV);
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ success: true });

    // Verify no event types are left
    listRes = await app.request('/event-types', {}, MOCK_ENV);
    updatedData = await listRes.json();
    expect(updatedData.length).toBe(0);
  });
});
