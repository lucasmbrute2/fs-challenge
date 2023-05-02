import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const addBodySchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email("Informe no formato de e-mail"),
  phone: z.string().nonempty(),
  address: z.string().min(6).max(59),
  cnpj: z.string()
    .refine(value =>
      /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/.test(value)
    )
})

const validationByRoutePaths = {
  "/": addBodySchema
}

type Paths = keyof typeof validationByRoutePaths

export function validateCompanyBody(req: Request, res: Response, next: NextFunction) {
  if (req.method !== "POST") return next()

  const validation = validationByRoutePaths[req.path as Paths].safeParse(req.body)

  if (validation.success === false) {
    return res.status(409).json({
      error: validation.error.format()
    })

  }
  return next()
}