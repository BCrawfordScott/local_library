const mongoose = require('mongoose');

const { Schema } = mongoose;

const GenreSchema = new Schema({
  name: { type: String, required: true, max: 100 },
});

GenreSchema
  .virtual('url')
  .get(() => `catalog/genres/${self._id}`);

module.exports = mongoose.model('Genre', GenreSchema);
