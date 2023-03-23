// Require the express module
const express =require('express');

// Require the userController module
const{homeView} = require('../controllers/userController');

// Create a router object
const router = express.Router();

// Set up a route for the home page and call the homeView function
router.get('/', homeView);

// Uncomment the following lines to add routes for postView and aboutView functions
//router.post('/',postView);
//router.get('/about',aboutView);

// Export the router object
module.exports = router;