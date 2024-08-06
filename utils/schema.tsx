import { pgTable, serial, text, varchar, boolean } from "drizzle-orm/pg-core";

export const AIResponse = pgTable("aiResponse", {
  id: serial("id").primaryKey(),
  formData: varchar("formData").notNull(),
  aiResponse: text("aiResponse"),
  tamplateSlug: varchar("tamplateSlug").notNull(),
  createdBy: varchar("createdBy").notNull(),
  createdAt: varchar("createdAt").notNull(),
});

export const UserSubscription = pgTable("userSubscription", {
  id: serial("id").primaryKey(),
  email: varchar("email"),
  username: varchar("username"),
  active: boolean("active"),
  paymentId: varchar("paymentId"),
  joinDate: varchar("joinDate"),
});

export const MockInterview = pgTable("mockInterview", {
  id: serial("id").primaryKey(),
  jsonMockResp: text("jsonMockResp").notNull(),
  jobPosition: varchar("jobPosition").notNull(),
  jobDec: varchar("jobDec").notNull(),
  jobExperience: varchar("jobExperience").notNull(),
  createBy: varchar("createBy").notNull(),
  createdAt: varchar("createdAt").notNull(),
  mockId: varchar("mockId").notNull(),
});
