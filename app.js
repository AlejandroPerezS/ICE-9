// requires
const express = require('express'); // import express module
const exphbs = require('express-handlebars'); // import express-handlebars module
const dotenv = require('dotenv'); // import dotenv module

// configurations
dotenv.config({path: "./process.env"}); // configure dotenv with the path of process.env file

// create app
const app = express(); // create an instance of express

// render engine
app.engine('.hbs', exphbs.engine({defaultLayout: 'main', partialsDirectory: './views/partials',extname: '.hbs'})); // set up handlebars as the view engine
app.set('view engine', '.hbs'); // set the view engine to .hbs
app.set('views','./views'); // set the views directory

// routes
app.use('/',require('./routes/user'))

// get port from process.env file
const PORT = process.env.PORT; 

// create server and listen on the specified port
app.listen(PORT, () =>{ 
    console.log(`Server started on port ${PORT}`); // log a message when the server is started
});