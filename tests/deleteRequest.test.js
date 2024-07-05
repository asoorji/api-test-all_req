// tests/deleteRequest.test.js

const { test, expect } = require('@playwright/test');

test('Delete a post using DELETE request', async ({ request }) => {
  const response = await request.delete('/posts/1');
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
});
