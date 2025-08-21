const express = require('express')

const userController = require('./controllers/userController')
const itemsController = require('./controllers/itemsController')

const jwtMiddleware = require('./middleware/jwtMiddleware')

const route = new express.Router()

// register
route.post('/register',userController.registerController)

// login
route.post('/login', userController.loginController)

// Create new item
route.post("/add-item",jwtMiddleware , itemsController.addItemController);

// Get all items of logged-in user
route.get("/get-item", jwtMiddleware, itemsController.getAllItemsController);

// Get a item
route.get("/get-item-one/:id", jwtMiddleware, itemsController.getOneItemController);

// Edit item (title, description)
route.put("/edit-item/:id", jwtMiddleware,itemsController.editItemController);

// Update status (pending/completed)
route.put("/status-update/:id",jwtMiddleware, itemsController.editItemstatusController);

// Delete item
route.delete("/delete/:id",jwtMiddleware, itemsController.deleteItemController);





module.exports = route