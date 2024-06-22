import { NextFunction, Request, Response } from 'express'

import { AppError } from '../errors/AppError'
import { ZodError } from 'zod'

export function errorHandle(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (error instanceof AppError) {
    return res.status(error.status).json({
      status: 'error',
      message: error.message,
    })
  }

  if (error instanceof ZodError) {
    return res.status(422).json({
      status: 'error',
      message: error.errors,
    })
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  })
}
