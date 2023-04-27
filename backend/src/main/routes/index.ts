import { Router } from "express"
import { companyRouter } from "./add-company-routes"

const route = Router()
route.use("/company", companyRouter)


export { route }