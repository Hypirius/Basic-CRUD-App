import express from "express"
import { PORT } from "./utils/constants.ts"

const app = express()

app.listen(PORT, () => {
  console.log(`Started server on ${PORT}`)
})
