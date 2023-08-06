import type { Config } from "drizzle-kit";

export default {
  schema: "./src/database/schema.ts",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    connectionString:
      process.env.DATABASE_URL ||
      "if-drizzle-uses-this-string-then-that-means-the-database-url-doesnt-work",
  },
} satisfies Config;
