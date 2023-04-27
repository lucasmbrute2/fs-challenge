import { PrismaClient } from "@prisma/client"
import { app } from "./app"
import { env } from "./config/env"

const prisma = new PrismaClient()

async function main() {
  await prisma.$connect()
}

main()
  .then(() => {
    console.info("Prisma connected")
    app.listen(env.PORT, () => console.log(`Server running on port ${env.PORT}`))
  })
  .catch(async (e) => {
    await prisma.$disconnect()
    console.error("Prisma was desconnected - error: " + e)
    process.exit(1)
  })
