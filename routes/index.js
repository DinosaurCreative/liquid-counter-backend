const express = require('express');

const rootRouter = express.Router();

const bottlesRoutes = require('./bottles');
const usersRoutes = require('./users');

rootRouter.use('/', bottlesRoutes);
rootRouter.use('/', usersRoutes);

module.exports = rootRouter;
