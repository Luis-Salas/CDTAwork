
const express = require("express");
const session = require('express-session');
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use( express.static( "static" ) );
app.use(express.urlencoded({extended: true}));
const bcrypt = require('bcrypt');
const flash = require('express-flash');
app.use(flash());

const mongoose = require('mongoose');
const sessionConfig  = {
    saveUninitialized: true,
    resave: false,
    name: 'session',
    secret: 'thisIsSuperSekret'
  };
app.use(session(sessionConfig));
mongoose.connect('mongodb://localhost/loginReg', {useNewUrlParser: true});

  const UserSchema = new mongoose.Schema({
    first_name: {type: String, required: [true, "user must have a fname"]},
    last_name: {type: String, required: [true, "user must have a lname"]},
    email: {type: String, required: [true, "user must have a email"]},
    password: {type: String, required: [true, "user must have a password"]},
    bday: {type: Date, required: [true, " must have bday"]},
  }, {timestamps: true})

   // create an object to that contains methods for mongoose to interface with MongoDB
   const User = mongoose.model('User', UserSchema);


app.get("/", (request,Response)=>{
    Response.render('main.ejs');
});
app.post("/createUser", (request,Response)=>{
    bcrypt.hash(request.body.password,10)
    .then(hashed_password => {
        console.log("hashing pw")
        const user = new User();
        console.log(hashed_password)
        user.first_name = request.body.first_name
        user.last_name = request.body.last_name
        user.email = request.body.email
        user.bday = request.body.bday
        user.password = hashed_password
        user.save()
        .then(newUser => {
            console.log(newUser)
        })
        .catch(err =>{
            for (var key in err.errors) {
                request.flash('registration', err.errors[key].message);
            }
            Response.redirect("/")
        })
    })
    .catch(error => {
        console.log(error)
    })
});

app.post("/loginUser", (req,res)=>{
    User.findOne({email: req.body.email})
    .then(function(user){
        if(!user){
            for (var key in err.errors) {
                req.flash('registration', err.errors[key].message);
            }
            res.redirect('/')
        }
        else{
            console.log(user.password)
            console.log(req.body.password)
        bcrypt.compare(req.body.password, user.password, function (err, result) {
            if (result == true) {
                console.log(result)
                console.log(err)
                res.redirect('/home');
            } else {
                console.log(err)
                for (var key in err.errors) {
                    req.flash('registration', err.errors[key].message);
                }
                res.redirect('/')

            }
            });
        }
    })
     
})
app.get("/home", (request,Response)=>{
    Response.render('home.ejs');
});


app.listen(8000, () => console.log("running on 8000"));
