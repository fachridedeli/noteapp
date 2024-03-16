CREATE TABLE IF NOT EXISTS "documents" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text,
	"foreign_id" integer,
	"content" json,
	"is_archived" boolean,
	"is_published" boolean
);
