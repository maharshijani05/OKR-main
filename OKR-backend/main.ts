import express from 'express'
import cors from 'cors'
import {HealthController} from "./healthController";
import {HealthService} from "./healthService";
import {createHealthRouteHandler} from "./createHealthRouteHandler";

const app = express()
const port = 3000


app.use(cors())

const healthService = new HealthService();
const healthController = new HealthController(healthService);

app.use("/health",
    createHealthRouteHandler(healthController)
)

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})