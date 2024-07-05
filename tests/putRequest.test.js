// tests/putRequest.test.js

const { test, expect } = require('@playwright/test');

test('Replace a post using PUT request', async ({ request }) => {
  const response = await request.put('/posts/1', {
    data: {
      id: 1,
      title: 'new title',
      body: 'new body',
      userId: 1,
    },
  });

  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  expect(data.id).toBe(1);
  expect(data.title).toBe('new title');
  expect(data.body).toBe('new body');
});
