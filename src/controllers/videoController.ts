import { RequestHandler } from "express";

export const trending: RequestHandler = (req, res) => {
  return res.status(200).json({
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 1,
  });
};
export const see: RequestHandler = (req, res) => {
  return res.send(`Watch Video #${req.params.id}`);
};
export const edit: RequestHandler = (req, res) => {
  return res.send("Edit");
};
export const search: RequestHandler = (req, res) => res.send("Search");
export const upload: RequestHandler = (req, res) => res.send("Upload");
export const deleteVideo: RequestHandler = (req, res) => {
  return res.send("Delete Video");
};
