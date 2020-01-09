
const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use( express.static( "static" ) );
app.use(express.urlencoded({extended: true}));
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/messageBoard', {useNewUrlParser: true});

const Schema = mongoose.Schema;
const CommentSchema = new mongoose.Schema({
    name: {type: String, required: [true, "comment must have a name"]},
    content: {type: String, required: [true, "comment must have content"]},
	_message: {type: Schema.Types.ObjectId, ref: 'Message'}

  }, {timestamps: true})
  const MessageSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Message must have a name"]},
    content: {type: String, required: [true, "Message must have content"]},
	_comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
  }, {timestamps: true})
  
   // create an object to that contains methods for mongoose to interface with MongoDB
   const Comment = mongoose.model('Comment', CommentSchema);
   const Message = mongoose.model('Message', MessageSchema);


app.get("/", (request,Response)=>{
    Message.find({}).populate('_comments').exec(function(err, messages) {
        Response.render('main.ejs', { data: messages });
    });
});
app.post("/createMessage", (request,Response)=>{
    console.log(request.body.username)
    const message = new Message();
    message.content = request.body.content
    message.name = request.body.username
    message.save()
    .then(newMessage => console.log('Message create: ', newMessage))
    .catch(err => console.log(err));
    Response.redirect("/")
});

app.post("/createComment/:id", (req,res)=>{
    console.log(req.params.id)
    Comment.create(req.body, function(err, data){
        if(err){
            console.log(err)
       }
       else {
           console.log("THIS IS THE DATA", data)
            Message.findOneAndUpdate({_id: req.params.id}, {$push: {_comments: data}}, function(err, data){
                 if(err){
                     // handle the error from trying to update the user
                    }
                    else {
                        console.log(data)
                        res.redirect("/")
                      // it worked! How shall we celebrate?
                 }
            })
        }
    })
});


app.listen(8000, () => console.log("running on 8000"));
