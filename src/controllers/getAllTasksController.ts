import type { Request, Response } from "express"

async function getAllTasksController(req: Request, res: Response) {
  res.status(200).send({ success: true })
}

export default getAllTasksController
