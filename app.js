const express = require('express');
require('dotenv').config();

// const mongoose = require('mongoose');

const app = express();
const { PORT = 3000 } = process.env;


// mongoose.connect('mongodb://localhost:27017/liquid-counter-db', {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//     useFindAndModify: false
// });

app.get('/', (req, res) => {
  res.status(404).send('<h1>Страница совсем не найдена</h1>')
}); 

app.post('/item', (req, res) => {

})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
