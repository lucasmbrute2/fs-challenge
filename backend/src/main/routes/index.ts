import { Router } from "express"
import { companyRouter } from "./company-routes"
import { validateCompanyBody } from "../middlewares/valid-company-data"
import { employeeRoutes } from "./employee-routes"

const route = Router()
route.use("/company", validateCompanyBody, companyRouter)
route.use("/employee", employeeRoutes)

export { route }