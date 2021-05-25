const mongoose = require('mongoose')

function connectDB() {
  //Database connection
  mongoose.connect('mongodb://localhost:27017/streams', {useNewUrlParser: true, useUnifiedTopology: true})
  const connection = mongoose.connection
  connection.on('open', () => {
      console.log("database connected");
  }).catch(e => {

    console.log(e);
  })
}
module.exports = connectDB;