const express = require('express');

const rootRouter = express.Router();

const bottlesRoutes = require('./bottles');

rootRouter.use('/', bottlesRoutes);

module.exports = rootRouter;
