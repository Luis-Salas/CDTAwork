const express = require('express');
const mongoose = require('mongoose');
const app = express();
const server = app.listen(8000);
const validate = require('mongoose-validator')
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
mongoose.connect('mongodb://localhost/AllQuotes', { useUnifiedTopology: true, useNewUrlParser: true });
var counter = 0;
var authorValidator = [
    validate({
        validator: 'isLength',
        arguments: [5, 50],
        message: "Author name should be between{ARG[0]} and {ARG[1]} characters",
    }),
    validate({
        validator: 'isAlphanumeric',
        passIfEmpty: false,
        message: 'Author name should contain alpha-numeric characters only',
    }),
]
var quoteValidator = [
    validate({
        validator: 'isLength',
        arguments: [10, 255],
        message: "Author name should be between{ARG[0]} and {ARG[1]} characters",
    }),
]
const QuotesSchema = new mongoose.Schema({
    author: { type: String, required: true, validate: authorValidator},
    theQuote: {type: String, required: true, validate: quoteValidator},
    },{timestamps: true});
// create an object to that contains methods for mongoose to interface with MongoDB
const Quote = mongoose.model('Quote', QuotesSchema);
app.get('/', (req, res) => {
    res.render('index',{ allErrors: errory});
});
app.post('/add', (req,res) => {
    const quote = new Quote();
    quote.author = req.body.name;
    quote.theQuote = req.body.theQuote;
    quote.created_at = req.body.created_at;
    quote.updated_at = req.body.updated_at;
    quote.save()
        .then(newQuoteData => console.log('quote created: ', newQuoteData), res.redirect('/'))
        .catch(err => {
            // console.log("We have an error!", err.errors);
            var errory = [];
            for (var key in err.errors) {
                var allErrors = err.errors[key].message;
                console.log(allErrors);
                errory.push(allErrors);
            }
            res.render('index', { allErrors: errory});
        });
});
app.get('/quotes', (req, res) =>{
    Quote.find()
        .then(data => res.render("quotes", {quotes: data}))
        .catch(err => res.json(err));
})