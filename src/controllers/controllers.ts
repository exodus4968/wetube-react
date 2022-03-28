import { RequestHandler } from "express";
import Video from "../models/Video";

export const trending: RequestHandler = async (req, res) => {
  try {
    const videos = await Video.find({});
    return res.status(200).send(videos);
  } catch (error) {
    return res.status(404).send(error);
  }
};

interface IUpload {
  title: string;
  description: string;
  hashtags: string;
}

export const upload: RequestHandler = async (req, res) => {
  const data: IUpload = req.body;
  const title = data.title;
  const description = data.description;
  const hashtags = data.hashtags.split(",").map((word) => `#${word}`);
  try {
    await Video.create({
      title,
      description,
      hashtags,
      createdAt: Date.now(),
      meta: {
        views: 0,
        rating: 0,
      },
    });
    return res.status(200).send("saved");
  } catch (error) {
    console.log(error);
    return res.status(202).send("error");
  }
};
