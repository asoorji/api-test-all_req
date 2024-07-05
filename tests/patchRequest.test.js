// tests/patchRequest.test.js

const { test, expect } = require('@playwright/test');

test('Update a post title using PATCH request', async ({ request }) => {
  const response = await request.patch('/posts/1', {
    data: {
      title: 'updated title',
    },
  });

  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  expect(data.title).toBe('updated title');
});
