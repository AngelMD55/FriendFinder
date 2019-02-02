let friends = require("../data/friends");
module.exports = function(app){
// /api/friends --- GET this will get json from all friends
app.get("/api/friends", function(req, res){
     res.json(friends);
});

// /api/friends --- POST to handle incoming survey form
app.post("/api/friends", function(req, res){
    let newFriend = (req.body);
    // for(let i = 0; i< (newFriend.score).length; i++){
    //     console.log(parseInt(newFriend.score[i]));
    // }

    friends.push(newFriend);
    res.status(200).json(newFriend);
    // res.status(200).json({sucess:"IM BEING SENT BACK"})
});
}