import { Router } from "express"
import { adapRoute } from "../adapters/express-routes-adapter"
import { makeAddCompanyController } from "../factories/add-company-controller"

const companyRouter = Router()
companyRouter.post('/', adapRoute(makeAddCompanyController()))

export { companyRouter }