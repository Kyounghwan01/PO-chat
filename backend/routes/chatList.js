const router = require("express").Router();
let ChatList = require('../models/chatList.model');

//GET
router.route("/").get((req, res) => {
  ChatList.find()
    .then(chatList => res.json(chatList))
    .catch(err => res.status(400).json("Error: " + err));
});

//POST

router.route("/add").post((req,res)=>{
  const by = req.body.by;
  const id = req.body.id;
  const chat_id = req.body.chat_id;
  const created_at = req.body.created_at;
  const title = req.body.title;
  const thumbnail_image_url = req.body.thumbnail_image_url;
  const position = req.body.position;

  const newChatList = new ChatList({
    by,
    id,
    chat_id,
    created_at,
    title,
    thumbnail_image_url,
    position
  });
  newChatList
    .save()
    .then(()=>res.json("chatList added!"))
    .catch(err => res.status(400).json("Error : " + err));
});

module.exports = router;
