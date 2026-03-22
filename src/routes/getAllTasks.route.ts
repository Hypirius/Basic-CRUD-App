import { Router } from "express"
import getAllTasksController from "../controllers/getAllTasksController.ts"

const getAllTasksRouter = Router()

getAllTasksRouter.get("/", getAllTasksController)

export default getAllTasksRouter
