const { PrismaClient } = require('@prisma/client')
const { blogSeed, userSeed } = require('./seed-data')

const prisma = new PrismaClient()
async function seeder() {
    try {
        for (let i = 0; i < userSeed.length; i++) {
            const userData = userSeed[i]
            const blogData = blogSeed[i]
            await prisma.user.create({
                data: {
                    ...userData,
                    Blog: {
                        create: blogData,
                    },
                },
                include: {
                    Blog: true,
                },
            })
        }
        // for (let blog of blogSeed) {
        //     console.log(blog)
        //     await prisma.blog.create({ data: blog })
        // }
        console.log('Seed ended')
    } catch (e) {
        console.error(e)
    } finally {
        prisma.$disconnect
    }
}
seeder()
