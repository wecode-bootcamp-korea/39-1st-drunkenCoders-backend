const express = require('express');

const cartRoutes = require('./cartRoutes');

const routes = express.Router();

routes.use('/carts', cartRoutes);

module.exports = routes;
