-- AlterTable
ALTER TABLE "properties" ALTER COLUMN "expire_at" SET DEFAULT now() + '30 days'::interval;
