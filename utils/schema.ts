import {
  pgTable,
  serial,
  text,
  varchar,
  boolean,
  integer,
  jsonb,
} from "drizzle-orm/pg-core";

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

export const tamplate = pgTable("tamplate", {
  id: serial("id").primaryKey(),

  name: varchar("name").notNull(),
  slug: varchar("slug").notNull(),
  description: varchar("description").notNull(),
  catgory: varchar("catgory").notNull(),
  icon: varchar("icon").notNull(),
  
  ai_prompt: text("ai_prompt").notNull(),
  
  form: jsonb("form").notNull(),   

  createdBy: integer("createdBy")
    .references(() => UserSubscription.id)
    .notNull(), //foreign key
  createdAt: varchar("createdAt").notNull(),
});
 