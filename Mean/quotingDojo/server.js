const session = require('express-session');

const express = require("express");
const app = express();
const path = require('path')

const mongoose = require('mongoose');
app.use(express.static(__dirname +'/static'))

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
const flash = require('express-flash');
app.use(flash());
const sessionConfig  = {
  saveUninitialized: true,
  resave: false,
  name: 'session',
  secret: 'thisIsSuperSekret'
};
app.use(express.urlencoded({extended: true}));
app.use(session(sessionConfig));


mongoose.connect('mongodb://localhost/name_of_your_DB', {useNewUrlParser: true});
const QuoteSchema = new mongoose.Schema({
 user_name: {type: String, required:true, minlength: 2},
 quote: {type:String, required:true, minlength:5}
})
// create an object to that contains methods for mongoose to interface with MongoDB
const Quote = mongoose.model('Quote', QuoteSchema);

app.get('/', (req, res) => {

  res.render("index")
});

app.post('/create', (req, res) => {
  const quote = new Quote();
  quote.user_name = req.body.user_name;
  quote.quote = req.body.quote;
  quote.save()
    .then(() => res.redirect('/quotes'))
    .catch(err => {
            console.log("We have an error!", err);
            // adjust the code below as needed to create a flash message with the tag and content you would like
            for (var key in err.errors) {
                req.flash('registration', err.errors[key].message);
            }
            res.redirect('/');
        });

})

app.get('/quotes',(req,res) => {
  Quote.find()
        .then(data => res.render("quotes", {quotes: data}))
        .catch(err => res.json(err));
})

app.listen(5000, () => console.log("listening on port 5000"));
