"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const healthController_1 = require("./healthController");
const healthService_1 = require("./healthService");
const createHealthRouteHandler_1 = require("./createHealthRouteHandler");
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
const healthService = new healthService_1.HealthService();
const healthController = new healthController_1.HealthController(healthService);
app.use("/health", (0, createHealthRouteHandler_1.createHealthRouteHandler)(healthController));
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
