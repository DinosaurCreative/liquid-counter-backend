const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const { dataBaseAdress } = require('./utils/config');

const { PORT = 3000 } = process.env;
const rootRouter = require('./routes/index');
const { connected, notConnected } = require('./utils/constants');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(dataBaseAdress, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log(connected))
.catch(() => console.log(notConnected));



app.use('/', rootRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
