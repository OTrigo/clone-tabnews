import retry from "async-retry";
import database from "infra/database";

const waitForAllServices = async () => {
  await waitForWebServer();

  async function waitForWebServer() {
    return retry(fetchStatusPage, {
      retries: 100,
    });

    async function fetchStatusPage() {
      try {
        const response = await fetch("http://localhost:3000/api/v1/status");
        if (!response.ok) throw new Error(`HTTP ERROR: ${response.status}`);

        return await response.json();
      } catch (error) {
        throw error;
      }
    }
  }
};

async function clearDatabase() {
  await database.query("drop schema public cascade; create schema public;");
}

export { waitForAllServices, clearDatabase };
