import mongoose from "mongoose";

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wetube");
}

const db = mongoose.connection;

db.on("error", (error) => console.log("DB Error", error));
db.once("open", () => console.log("Connected to DB"));
