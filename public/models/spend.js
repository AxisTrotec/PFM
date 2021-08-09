var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SpendSchema = new Schema(
  {
    spent: {type: Number, required: true, min: 0},
    month: {type: Date},
  }
);

SpendSchema
.virtual('url')
.get(function () {
  return '/catalog/spend/' + this._id;
});

module.exports = mongoose.model('Spend', SpendSchema);

