import { NextFunction, Request, Response } from 'express'

import { verify } from 'jsonwebtoken'

interface JwtPayload {
  id: string
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).end()
  }

  const [, token] = authorization?.split(' ')

  const jwtSecret = process.env.JWT_SECRET as string

  if (verify(token, jwtSecret)) {
    try {
      const { id } = verify(token, jwtSecret) as JwtPayload

      req.id = id

      return next()
    } catch (error) {
      return res.status(401).end()
    }
  } else {
    return res.status(401).end()
  }
}
