const express = require('express');
const routes = express.Router();
const controlCart = require('../controllers/cartControllers');

routes.post('', controlCart.addCart);
routes.get('/:userId', controlCart.checkCart);
routes.patch('/changeCart', controlCart.changeCart);
routes.delete('/deleteCart', controlCart.delateCart);

module.exports = routes;
