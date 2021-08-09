var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SpendingSchema = new Schema(
  {
    month: {type: Date},
    spent: {type: Number, required: true},
  }
);

SpendingSchema
.virtual('url')
.get(function () {
  return '/catalog/spending/' + this._id;
});

module.exports = mongoose.model('Spending', SpendingSchema);
