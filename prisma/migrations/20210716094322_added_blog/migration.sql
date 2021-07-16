-- CreateTable
CREATE TABLE "blog" (
    "blogid" SERIAL NOT NULL,
    "userid" VARCHAR NOT NULL,
    "blogtitle" VARCHAR NOT NULL,
    "blogcontent" VARCHAR NOT NULL,
    "datecreated" TIMESTAMP NOT NULL,

    PRIMARY KEY ("blogid")
);

-- AddForeignKey
ALTER TABLE "blog" ADD FOREIGN KEY ("userid") REFERENCES "user"("email") ON DELETE CASCADE ON UPDATE CASCADE;
