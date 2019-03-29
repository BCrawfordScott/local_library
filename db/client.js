const mongoose = require('mongoose');

function generateDB() {
  const mongoDB = `mongodb+srv://BCrawfordScott:${process.env.MDB_PASSWORD}@expresslibrarytutorial-oquuy.mongodb.net/test?retryWrites=true`;

  mongoose.connect(mongoDB, { useNewUrlParser: true });

  const db = mongoose.connection;

  // eslint-disable-next-line no-console
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

  return db;
}


module.exports = generateDB;
