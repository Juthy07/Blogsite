const { PrismaClient } = require('@prisma/client')
const blog_seeds = require('./seed-data/blog')
const prisma = new PrismaClient()
async function seeder() {
    try {
        for (let blog of blog_seeds) {
            console.log(blog)
            await prisma.user.create({ data: blog })
        }
    } catch (e) {
        console.error(e)
    } finally {
        prisma.$disconnect
    }
}
seeder()
