import express from "express";
import morgan from "morgan";
import { apiRouter } from "./routers/apiRouter";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const logger = morgan("dev");

app.use(logger);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRouter);

export default app;
