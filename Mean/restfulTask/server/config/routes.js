var tasks = require("../controllers/tasks");

module.exports = function(app){
    app.get("/tasks", tasks.index);
    app.post("/create",tasks.create);
    app.get('/show/:id',tasks.show);
    app.post('/update/:id',tasks.update);
    app.get('/delete/:id',tasks.delete);

}