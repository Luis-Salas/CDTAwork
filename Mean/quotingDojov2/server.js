const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use( express.static( "static" ) );
app.use(express.urlencoded({extended: true}));
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quotedb', {useNewUrlParser: true});

const QuoteSchema = new mongoose.Schema({
    quote: String,
    name: String
   })
   // create an object to that contains methods for mongoose to interface with MongoDB
   const Quote = mongoose.model('Quote', QuoteSchema);

app.get("/", (request,Response)=>{
    Response.render("main")
});

app.post('/quote', (req, res)=>{
    const quote = new Quote();
    quote.name = req.body.name;
    quote.quote = req.body.quote;
    quote.save()
      .then(newQuote => console.log('Quote Created: ', newQuote))
      .catch(err => console.log(err));
    res.redirect('/result');
  })

app.get("/result", (request,Response)=>{
    Quote.find()
    .then(quotes => {
        Response.render("result", {info: quotes})
    })
    .catch(err => res.json(err));
});

app.listen(8000, () => console.log("running on 8000"));
