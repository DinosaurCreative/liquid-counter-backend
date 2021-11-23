const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const { dataBaseAdress } = require('./utils/config');
const NotFoundError = require('./errors/NotFoundError');
const wrongPath = require('./utils/constants');

const { PORT = 3000 } = process.env;
const rootRouter = require('./routes/index');
const { connected, notConnected } = require('./utils/constants');
const errorHandler = require('./middlewares/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);
mongoose.connect(dataBaseAdress, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log(connected))
  .catch(() => console.log(notConnected));

app.use('/', rootRouter);

app.use('*', () => {
  throw new NotFoundError(wrongPath);
});

app.use(errorLogger);
app.use(errors());

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
