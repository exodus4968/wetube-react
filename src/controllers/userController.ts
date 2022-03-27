import { RequestHandler } from "express";

export const join: RequestHandler = (req, res) => res.send("Join");
export const edit: RequestHandler = (req, res) => res.send("Edit User");
export const remove: RequestHandler = (req, res) => res.send("Remove User");
export const login: RequestHandler = (req, res) => res.send("Login");
export const logout: RequestHandler = (req, res) => res.send("Log out");
export const see: RequestHandler = (req, res) => res.send("See User");
