// tests/postRequest.test.js

const { test, expect } = require('@playwright/test');

test('Create a new post using POST request', async ({ request }) => {
  const response = await request.post('/posts', {
    data: {
      title: 'foo',
      body: 'bar',
      userId: 1,
    },
  });

  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  expect(data.title).toBe('foo');
  expect(data.body).toBe('bar');
  expect(data.userId).toBe(1);
});
