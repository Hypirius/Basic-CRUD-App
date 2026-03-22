import express from "express"
import config from "./config/env.ts"

const { PORT } = config

const app = express()

app.listen(PORT, () => {
  console.log(`Started server on ${PORT}`)
})
