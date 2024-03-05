test("GET to /api/v1/migrations should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations");

  const responseBody = await response.json()

  expect(Array.isArray(responseBody)).toBe(true);
});
