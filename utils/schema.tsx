import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const AIResponse = pgTable("aiResponse", {
  id: serial("id").primaryKey(),
  formData: varchar("formData").notNull(),
  aiResponse: text("aiResponse"),
  tamplateSlug: varchar("tamplateSlug").notNull(),
  createdBy: varchar("createdBy").notNull(),
  createdAt: varchar("createdAt").notNull(),
});
