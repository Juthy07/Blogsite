/*
  Warnings:

  - Added the required column `dateforsorting` to the `blog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "blog" ADD COLUMN     "dateforsorting" TIMESTAMP NOT NULL;
