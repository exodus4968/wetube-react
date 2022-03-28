import mongoose from "mongoose";

interface IVideo {
  title: String;
  description: String;
  createdAt: Date;
  hashtags: [{ type: String }];
  meta: {
    views: Number;
    rating: Number;
  };
}

const videoSchema = new mongoose.Schema<IVideo>({
  title: {
    type: String,
    trim: true,
    required: true,
    minlength: 2,
    maxlength: 20,
  },
  description: {
    type: String,
    trim: true,
    required: true,
    minlength: 2,
    maxlength: 200,
  },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String, trim: true, minlength: 2, maxlength: 10 }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
