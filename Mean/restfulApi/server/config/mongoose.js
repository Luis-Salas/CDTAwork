/*
*  require mongoose
*/
const mongoose    = require('mongoose');


/*
*  require file-system so that we can load, read, require all model files
*/
const fs          = require('fs');

/*
*  utilize path for easy dir/file joining
*/
const path        = require('path');

/*
*  Dir where our models are located
*/
const modelsPath = path.resolve('server', 'models');

/*
*  Regular expression that checks for .js extension
*/
const reg         = new RegExp("\\.js$", "i");

/*
*  database information
*/
const dbURI       = 'mongodb://localhost/1955-api';

/*
* Connect to the database
*/
mongoose.connect(dbURI);

/*
*  utilize global Promise to replace mongoose Promise
*/
mongoose.Promise  = global.Promise;

/*
*  CONNECTION EVENTS
*  When successfully connected
*/

/*
*  read all of the files in the models dir and
*  check if it is a javascript file before requiring it
*/
fs.readdirSync(modelsPath).forEach(file => {
  if (reg.test(file)) {
    require(path.join(modelsPath, file));
  }
});
