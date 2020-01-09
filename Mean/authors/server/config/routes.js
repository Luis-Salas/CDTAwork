var author = require("../controllers/authors");

module.exports = function(app){
    app.get("/authors", author.index);
    app.post("/create",author.create);
    app.post("/author/:id",author.edit);
}