const express = require("express");
const apiRouter = express.Router();
let friendsData = require("../data/friends");

// /api/friends --- GET this will get json from all friends
apiRouter.get("/api/friends", function(req, res){
    return res.json(friendsData);
});

// /api/friends --- POST to handle incoming survey form
apiRouter.post("/api/friends", (req, res ) =>{
    let newFriend = req.body;
    friends.push(newFriend);

    // res.status(200).json({sucess:"IM BEING SENT BACK"})
});