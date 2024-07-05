const { test, expect } = require('@playwright/test');

test('Verify GET request for all posts', async ({ request }) => {
  const response = await request.get('/posts');

  expect(response.ok()).toBeTruthy();

  // Parse the response body as JSON
  const data = await response.json();

  // Verify the response is an array
  expect(Array.isArray(data)).toBe(true);

  // Check that the array is not empty
  expect(data.length).toBeGreaterThan(0);

  // Verify the content of the first post in the array
  const firstPost = data[0];
  expect(firstPost).toBeDefined();
  expect(firstPost.id).toBeTruthy();    // Check that the first post has an ID
  expect(firstPost.title).toBeTruthy(); // Check that the first post has a title
  expect(firstPost.body).toBeTruthy();  // Check that the first post has a body
  expect(firstPost.userId).toBeTruthy();// Check that the first post has a userId
});
