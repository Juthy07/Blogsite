-- CreateTable
CREATE TABLE "whitelist" (
    "id" SERIAL NOT NULL,
    "validSID" VARCHAR NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "whitelist" ADD FOREIGN KEY ("validSID") REFERENCES "session"("sid") ON DELETE CASCADE ON UPDATE CASCADE;
