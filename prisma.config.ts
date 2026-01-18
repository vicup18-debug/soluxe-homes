import { defineConfig } from "@prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // v7 Rule: Only the URL goes here!
    url: "postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public",
  },
});