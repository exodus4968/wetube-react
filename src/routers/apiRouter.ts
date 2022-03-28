import express from "express";
import { trending, upload } from "../controllers/controllers";

export const apiRouter = express.Router();

apiRouter.route("/trending").get(trending);
apiRouter.route("/upload").post(upload);
