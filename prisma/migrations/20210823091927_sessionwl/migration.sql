/*
  Warnings:

  - A unique constraint covering the columns `[sid]` on the table `SessionWhiteList` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "SessionWhiteList.sid_unique" ON "SessionWhiteList"("sid");
