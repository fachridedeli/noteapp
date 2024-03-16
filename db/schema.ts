import { relations } from "drizzle-orm";
import {
  boolean,
  integer,
  json,
  pgTable,
  serial,
  text,
} from "drizzle-orm/pg-core";

export const documents = pgTable("documents", {
  id: serial("id").primaryKey(),
  title: text("title"),
  foreignId: integer("foreign_id"),
  content: json("content"),
  isArchived: boolean("is_archived"),
  isPublished: boolean("is_published"),
});

export const documentsRelations = relations(documents, ({ one, many }) => ({
  documentsInfo: one(documents, {
    fields: [documents.id],
    references: [documents.id],
  }),
}));

export const documentsInfo = pgTable("documents_info", {
  id: serial("id").primaryKey(),
  documentsId: integer("user_id").references(() => documents.id),
});
