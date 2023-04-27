import { Router } from "express"
import { adapRoute } from "../adapters/express-routes-adapter"
import { makeAddEmployeeController } from "../factories/add-employee-controller"

const employeeRoutes = Router()

employeeRoutes.post('/', adapRoute(makeAddEmployeeController()))

export { employeeRoutes }