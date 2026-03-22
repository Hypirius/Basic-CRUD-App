import express from "express"
import config from "./config/env.ts"
import cors from "cors"
import getAllTasksRouter from "./routes/getAllTasks.route.ts"

const { PORT } = config

const app = express()
app.use(express.json())
app.use(
  cors({
    origin: [config.NODE_ENV === "development" && "http://localhost:5173"],
  }),
)
app.use("/getTasks", getAllTasksRouter)

app.listen(PORT, () => {
  console.log(`Started server on ${PORT}`)
})
