const mongoose = require('mongoose');

const { Schema } = mongoose;

/* Define the Author schema */
const AuthorSchema = new Schema({
  firstName: { type: String, required: true, max: 100 },
  lastName: { type: String, required: true, max: 100 },
  DOB: { type: Date },
  DOD: { type: Date },
});

// Virtuals (decorators and or instance methods)

AuthorSchema
  .virtual('name')
  .get(() => `${this.lastName}, ${this.firstName}`);

AuthorSchema
  .virtual('lifespan')
  .get(() => (this.DOD.getYear() - this.DOB.getYear()).toString());

AuthorSchema
  .virtual('url')
  .get(() => `catalog/author/${this.id}`);

module.exports = mongoose.model('Author', AuthorSchema);
