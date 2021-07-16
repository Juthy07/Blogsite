/*
  Warnings:

  - You are about to drop the column `userid` on the `blog` table. All the data in the column will be lost.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `userID` to the `blog` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "blog" DROP CONSTRAINT "blog_userid_fkey";

-- AlterTable
ALTER TABLE "blog" DROP COLUMN "userid",
ADD COLUMN     "userID" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "user" DROP CONSTRAINT "user_pkey",
ADD COLUMN     "userID" SERIAL NOT NULL,
ADD PRIMARY KEY ("userID");

-- AddForeignKey
ALTER TABLE "blog" ADD FOREIGN KEY ("userID") REFERENCES "user"("userID") ON DELETE CASCADE ON UPDATE CASCADE;
