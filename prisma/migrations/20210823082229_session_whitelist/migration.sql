/*
  Warnings:

  - You are about to drop the `whitelist` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "whitelist";

-- CreateTable
CREATE TABLE "session_whitelist" (
    "id" SERIAL NOT NULL,
    "validSID" VARCHAR NOT NULL,

    PRIMARY KEY ("id")
);
