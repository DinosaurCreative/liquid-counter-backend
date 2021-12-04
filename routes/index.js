const express = require('express');

const rootRouter = express.Router();

const bottlesRoutes = require('./bottles');
const usersRoutes = require('./users');
const inventarizationRoutes = require('./Inventarization');

rootRouter.use('/', bottlesRoutes);
rootRouter.use('/', usersRoutes);
rootRouter.use('/', inventarizationRoutes);

module.exports = rootRouter;
