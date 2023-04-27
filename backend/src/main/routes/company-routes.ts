import { Router } from "express"
import { adapRoute } from "../adapters/express-routes-adapter"
import { makeAddCompanyController } from "../factories/add-company-controller"
import { makeFindManyCompaniesController } from "../factories/find-many-companies-controller"

const companyRouter = Router()
companyRouter.post('/', adapRoute(makeAddCompanyController()))
companyRouter.get('/', adapRoute(makeFindManyCompaniesController()))

export { companyRouter }