const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatListSchema = new Schema(
  {
    by: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    chat_id: {
      type: Number,
      required: true
    },
    created_at: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    thumbnail_image_url: {
      type: String,
      required: true,
      default:
        "https://is3-ssl.mzstatic.com/image/thumb/Purple/v4/9c/a9/f2/9ca9f252-8026-54e6-e4bf-0b13f6d4bbcf/mzl.tgzuqigc.png/320x0w.jpg"
    },
    position: {
      type: String,
      required: true,
      default: "right"
    }
  },
  {
    timestamps: true
  }
);

const ChatList = mongoose.model("ChatList", chatListSchema);

module.exports = ChatList;

/*
{
    "thumbnail_image_url": "https://is3-ssl.mzstatic.com/image/thumb/Purple/v4/9c/a9/f2/9ca9f252-8026-54e6-e4bf-0b13f6d4bbcf/mzl.tgzuqigc.png/320x0w.jpg",
    "_id": "5d6f7c2950176fc2b6721c71",
    "by": "pororo",
    "id": 3,
    "created_at": "09:01",
    "title": "po-chat",
    "__v": 0
  },
*/