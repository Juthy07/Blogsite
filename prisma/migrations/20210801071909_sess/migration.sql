/*
  Warnings:

  - You are about to drop the `Blog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Blog" DROP CONSTRAINT "Blog_userFK_fkey";

-- DropTable
DROP TABLE "Blog";

-- DropTable
DROP TABLE "Session";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "user" (
    "userID" SERIAL NOT NULL,
    "email" VARCHAR NOT NULL,
    "username" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,

    PRIMARY KEY ("userID")
);

-- CreateTable
CREATE TABLE "session" (
    "sid" VARCHAR NOT NULL,
    "sess" JSON NOT NULL,
    "expire" TIMESTAMP(6) NOT NULL,
    "userid" VARCHAR NOT NULL,

    PRIMARY KEY ("sid")
);

-- CreateTable
CREATE TABLE "blog" (
    "blogID" SERIAL NOT NULL,
    "userFK" INTEGER NOT NULL,
    "blogtitle" VARCHAR NOT NULL,
    "blogcontent" VARCHAR NOT NULL,
    "datecreated" DATE NOT NULL,

    PRIMARY KEY ("blogID")
);

-- CreateIndex
CREATE INDEX "IDX_session_expire" ON "session"("expire");

-- AddForeignKey
ALTER TABLE "blog" ADD FOREIGN KEY ("userFK") REFERENCES "user"("userID") ON DELETE CASCADE ON UPDATE CASCADE;
