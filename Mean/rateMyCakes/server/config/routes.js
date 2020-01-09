var cakes = require("../controllers/cakes");

module.exports = function(app){
    app.get("/cakes", cakes.index);
    app.post("/create",cakes.create);
    app.post("/comment/:id",cakes.createComment);
    app.get("/show/:id", cakes.show);

}