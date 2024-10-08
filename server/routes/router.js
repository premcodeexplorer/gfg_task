const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 * @description Root Route
* @methode get/
*/
route.get('/' ,services.homeRoutes);


/**
 * @description add user
* @methode get /add user
*/
route.get('/add-user',services.add_user)



/**
 * @description for update user
* @methode update user
*/

route.get('/update-user',services.update_user)


//API
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);

module.exports = route