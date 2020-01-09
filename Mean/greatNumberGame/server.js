const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use( express.static( "static" ) );
app.use(express.urlencoded({extended: true}));

const session = require('express-session');
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

//  ROUTES GO HERE
// --------------------------------------------------------

app.get('/', (request, response) => {
    request.session.number = Math.floor(Math.random() * 100);
    var prize = request.session.output == "correct" ? "images/cat.png": ""
    var obj = {
        number :request.session.number, 
        output:request.session.output,
        picture: prize
    }
    response.render('index', {val: obj});
});

app.post('/guess', (req, res) => {
    req.session.output = req.body.number == req.session.number ? "correct" : req.body.number > req.session.number ? "Too High": "too Low"
    res.redirect('/')
});
app.get('/reset', (req, res) => {
    req.session.destroy();
    res.redirect('/')
})

app.listen(8000, () => console.log("listening on port 8000"));