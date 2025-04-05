import dotenv from "dotenv"
dotenv.config()

import app from "./app"
import { createDatabaseConnection } from "./config/database"

const PORT = process.env.PORT

const startServer = async() => {
    await createDatabaseConnection();
    app.listen(PORT, () =>  {
        console.log(`Server is running on http://localhost:${PORT}`)
    })
}

startServer();




