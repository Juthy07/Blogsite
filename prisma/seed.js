const { PrismaClient } = require('@prisma/client')
const { blogSeed, userSeed } = require('./seed-data')

const prisma = new PrismaClient()
async function seeder() {
    try {
        for (let blog of blogSeed) {
            console.log(blog)
            await prisma.user.create({ data: blog })
        }
        // for (let user of userSeed) {
        //     await prisma.user.create({ data: user })
        // }
    } catch (e) {
        console.error(e)
    } finally {
        prisma.$disconnect
    }
}
seeder()
