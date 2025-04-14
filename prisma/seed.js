const dotenv = require("dotenv");
const { PrismaClient } = require("@prisma/client");
const data = require("./mock-data.json");

dotenv.config();

const prisma = new PrismaClient();

async function main () {
    //using my own clerkId to seed the database
    const clerkId = process.env.CLERK_USER_ID;
    const jobs = data.map((job) => {
        return {
            ...job,
            clerkId
        }
    })

    for(const job of jobs) {
        await prisma.job.create({
            data: job
        })
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    }) 