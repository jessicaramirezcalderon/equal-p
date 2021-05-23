const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  company: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
  rating: {type: Number, required: true}
});


const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
