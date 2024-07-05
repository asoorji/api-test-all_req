// tests/getRequest.test.js

const { test, expect } = require('@playwright/test');

test('Verify GET request for a post by ID', async ({ request }) => {
  const response = await request.get('/posts/1');
  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  expect(data.id).toBe(1);
  expect(data.title).toBeTruthy();
});
