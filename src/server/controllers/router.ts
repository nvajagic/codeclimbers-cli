import express from 'express'
import { v1Routes } from './v1/v1.router'
const routes = express.Router()

export const buildApiRoutes = () => {
  routes.use('/v1', v1Routes())
  return routes
}
