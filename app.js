const express = require("express"); // This is the framework we are using to build the server
const mongoose = require("mongoose"); // This is the ODM (Object data modelling) package
const bodyParser = require("body-parser"); // Makes our stream data useable
const methodOverride = require("method-override"); // Allows us to use PUT/PATCH/DELETE, because thr browser only has get&post
const app = express();

mongoose.connect("mongodb://localhost/angelquotes", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.Promise = global.Promise // Telling mongoose to use the Node Promise library.
mongoose.connection.on("error", err => console.log(err));

app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require("./routes"));

module.exports = app; 