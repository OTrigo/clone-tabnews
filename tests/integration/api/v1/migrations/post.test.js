import database from "infra/database.js";

async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public;");
}
beforeAll(cleanDatabase);

test("GET to /api/v1/migrations should return 200", async () => {
  const response1 = await fetch("http://localhost:3000/api/v1/migrations");

  const response1Body = await response1.json();

  expect(Array.isArray(response1Body)).toBe(true);
  expect(response1Body.length).toBeGreaterThan(0);
});
