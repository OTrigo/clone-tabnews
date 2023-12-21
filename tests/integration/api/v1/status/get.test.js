test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();

  const { database, max_connections, opened_connections } =
    responseBody.dependencies;

  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  expect(parseFloat(database)).toBeGreaterThan(0);

  expect(parseInt(max_connections)).toBeGreaterThan(0);

  expect(parseInt(opened_connections)).toBeGreaterThan(0);
});
