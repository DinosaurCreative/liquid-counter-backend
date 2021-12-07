const express = require('express');

const rootRouter = express.Router();

const bottlesRoutes = require('./bottles');
const usersRoutes = require('./users');
const inventarizationRoutes = require('./inventarization');
const unknownBottlesRoutes = require('./unknownBottles');

rootRouter.use('/', bottlesRoutes);
rootRouter.use('/', usersRoutes);
rootRouter.use('/', inventarizationRoutes);
rootRouter.use('/', unknownBottlesRoutes);

module.exports = rootRouter;
