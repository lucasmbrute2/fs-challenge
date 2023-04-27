import { Controller } from "@/presentation/protocols/controller";
import { httpRequest } from "@/presentation/protocols/http";
import { Request, Response } from "express";

export const adapRoute = (controller: Controller) => {
  return async (req: Request, res: Response): Promise<Response> => {
    const httpRequest: httpRequest = {
      body: req.body
    }
    const httpResponse = await controller.handle(httpRequest)
    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      return res.status(httpResponse.statusCode).json(httpResponse.body)
    } else {
      return res.status(httpResponse.statusCode).json({
        error: httpResponse.body
      })
    }
  }
}