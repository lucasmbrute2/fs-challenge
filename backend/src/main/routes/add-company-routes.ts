import { Router } from "express"
import { adapRoute } from "../adapters/express-routes-adapter"
import { makeAddCompanyController } from "../factories/add-company-controller"

const compayRouter = Router()
compayRouter.post('/', adapRoute(makeAddCompanyController()))

export { compayRouter }