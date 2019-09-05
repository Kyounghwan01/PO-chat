const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema(
  {
    by: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true
    },
    created_at: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    thumbnail_image_url: {
      type: String,
      default:
        "https://is3-ssl.mzstatic.com/image/thumb/Purple/v4/9c/a9/f2/9ca9f252-8026-54e6-e4bf-0b13f6d4bbcf/mzl.tgzuqigc.png/320x0w.jpg"
    }
  }
);

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
