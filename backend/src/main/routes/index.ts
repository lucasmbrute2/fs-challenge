import { Router } from "express"
import { companyRouter } from "./add-company-routes"
import { validateCompanyBody } from "../middlewares/valid-company-data"

const route = Router()
route.use("/company", validateCompanyBody, companyRouter)

export { route }