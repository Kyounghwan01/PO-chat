const router = require("express").Router();
let Chat = require("../models/chat.model");

router.route("/").get((req, res) => {
  Chat.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const by = req.body.by;
  const id = req.body.id;
  const created_at = req.body.created_at;
  const title = req.body.title;
  const thumbnail_image_url = req.body.thumbnail_image_url;

  const newChat = new Chat({
    by,
    id,
    created_at,
    title,
    thumbnail_image_url
  });

  newChat
    .save()
    .then(() => res.json("chat User added!"))
    .catch(err => res.status(400).json("Error : " + err));
});

router.route("/update/").post((req, res) => {
  Chat.findOne({id : req.body.id},function(err,p){
    p.by = req.body.by;
    p.id = req.body.id;
    p.created_at = req.body.created_at;
    p.title = req.body.title;
    p.thumbnail_image_url = req.body.thumbnail_image_url;
    p.save()
  })
  .then(()=>res.json("user change"))
  .catch(err => res.status(400).json("Error : " + err));
})

module.exports = router;
