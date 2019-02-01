const express = require("express");
const apiRouter = express.Router();
let friends = require("../data/friends");

// /api/friends --- GET this will get json from all friends
apiRouter.get("/api/friends", function(req, res){
    return res.json(friends);
});

// /api/friends --- POST to handle incoming survey form
apiRouter.post("/api/friends", function(req, res ){
    let newFriend = req.body;
    friends.push(newFriend);
    console.log(friends)
    res.json(newFriend);
    res.status(200).json({sucess:"IM BEING SENT BACK"})
});

module.exports = apiRouter;