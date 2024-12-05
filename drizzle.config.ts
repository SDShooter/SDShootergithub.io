import { type Config } from "drizzle-kit";
//import { string } from "zod";

//import { env } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL ?? "",
  },
  tablesFilter: ["SDShootergithub_*"],
} satisfies Config;
