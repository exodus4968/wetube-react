import express from "express";
import { trending } from "../controllers/videoController";

export const apiRouter = express.Router();

apiRouter.route("/videos/:id(\\d+)").get(trending);
