import path from "path"
import { fileURLToPath } from "url"
import { dirname } from "path"
import { config } from "dotenv"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

config({
  path: path.join(
    __dirname,
    "../../",
    `.env.${process.env.NODE_ENV || "development"}.local`,
  ),
})

const _config = {
  PORT: process.env.PORT || 3000,
  DB_NAME: process.env.DB_NAME,
  DB_URL: process.env.DB_URL,
  __dirname,
  __filename,
}

export default Object.freeze(_config)
