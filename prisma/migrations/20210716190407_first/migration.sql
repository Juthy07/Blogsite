-- CreateTable
CREATE TABLE "User" (
    "userID" SERIAL NOT NULL,
    "email" VARCHAR NOT NULL,
    "username" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,

    PRIMARY KEY ("userID")
);

-- CreateTable
CREATE TABLE "Session" (
    "sid" VARCHAR NOT NULL,
    "sess" JSON NOT NULL,
    "expire" TIMESTAMP(6) NOT NULL,
    "userid" VARCHAR[],

    PRIMARY KEY ("sid")
);

-- CreateTable
CREATE TABLE "Blog" (
    "blogID" SERIAL NOT NULL,
    "userFK" INTEGER NOT NULL,
    "blogtitle" VARCHAR NOT NULL,
    "blogcontent" VARCHAR NOT NULL,
    "datecreated" DATE NOT NULL,

    PRIMARY KEY ("blogID")
);

-- CreateIndex
CREATE INDEX "IDX_session_expire" ON "Session"("expire");

-- AddForeignKey
ALTER TABLE "Blog" ADD FOREIGN KEY ("userFK") REFERENCES "User"("userID") ON DELETE CASCADE ON UPDATE CASCADE;
