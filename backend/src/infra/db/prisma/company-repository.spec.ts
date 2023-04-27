import { execSync } from "child_process";
import { randomUUID } from "crypto";
import { afterAll, beforeAll, beforeEach, describe, expect, it } from "vitest";
import { PrismaClient } from "@prisma/client"
import { CompanyRepository } from "./company-repository";
import { makeCompany } from "@/domain/entities/tests/factories";
import { Company } from "@/domain/entities/company";

const makeSut = (): CompanyRepository => {
  return new CompanyRepository()
}

describe("CompanyRepository", () => {
  const prisma = new PrismaClient()
  let schema: string

  beforeAll(() => {
    console.log(process.env.DATABASE_URL)

    if (!process.env.DATABASE_URL) {
      throw new Error('Please provide a DATABASE_URL environment variable')
    }
    schema = randomUUID()
    const url = new URL(process.env.DATABASE_URL)
    url.searchParams.set("schema", schema)

    process.env.DATABASE_URL = url.toString()
    execSync("npx prisma migrate deploy")
  })

  afterAll(async () => {
    await prisma.$queryRawUnsafe(
      `DROP SCHEMA IF EXISTS "${schema}" CASCADE`
    )
    await prisma.$disconnect()
  })

  beforeEach(async () => {
    await prisma.company.deleteMany({})
  })

  it("should return a Company on success", async () => {
    const sut = makeSut()
    const company = await sut.add(makeCompany())

    expect(company).toBeInstanceOf(Company)
    expect(company).toBeTruthy()
    expect(company).toEqual(makeCompany())

  })
})