/*
  Warnings:

  - The primary key for the `register` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Made the column `password` on table `register` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "register" DROP CONSTRAINT "register_pkey",
ALTER COLUMN "password" SET NOT NULL,
ADD PRIMARY KEY ("email");
