const { PrismaClient } = require('@prisma/client')
const user_seeds = require('./seed-data/user')
const prisma = new PrismaClient()
async function seeder() {
    try {
        for (let user of user_seeds) {
            console.log(user)
            await prisma.user.create({ data: user })
        }
    } catch (e) {
        console.error(e)
    } finally {
        prisma.$disconnect
    }
}
seeder()
