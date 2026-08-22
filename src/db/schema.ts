import {
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const growthAuditSubmissions = pgTable("growth_audit_submissions", {
  id: serial("id").primaryKey(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  companyName: varchar("company_name", { length: 255 }),
  businessEmail: varchar("business_email", { length: 255 }).notNull(),
  whatsappPhone: varchar("whatsapp_phone", { length: 50 }),
  website: varchar("website", { length: 500 }),
  industry: varchar("industry", { length: 255 }),
  servicesInterested: text("services_interested"),
  monthlyBudget: varchar("monthly_budget", { length: 100 }),
  monthlyLeads: varchar("monthly_leads", { length: 100 }),
  biggestChallenge: text("biggest_challenge"),
  desiredResult: text("desired_result"),
  additionalMessage: text("additional_message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
