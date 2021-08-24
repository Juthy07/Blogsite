/*
  Warnings:

  - You are about to drop the `session_whitelist` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "session_whitelist";

-- CreateTable
CREATE TABLE "SessionWhiteList" (
    "id" SERIAL NOT NULL,
    "sid" VARCHAR NOT NULL,

    PRIMARY KEY ("id")
);
