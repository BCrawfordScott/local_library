const mongoose = require('mongoose');

function generateDB() {
  const mongoDB = `mongodb+srv://BCrawfordScott:${process.env.MDBPASSWROD}@expresslibrarytutorial-oquuy.mongodb.net/test?retryWrites=true`

  mongoose.connect(mongoDB, { useNewUrlParser: true });

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

  return db;
}


module.exports = generateDB;
