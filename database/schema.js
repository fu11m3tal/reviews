const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ReviewSchema = new Schema({
  _id: Number,
  review: String, 
  overall: Number,
  food: Number,
  service: Number,
  ambience: Number,
  value: Number,
  noise: String,
  would_recommend: Number,
  date: Date, 
  restaurant_name: String,
  restaurant_id: Number,
  user_id: Number,
  user: String,
  user_initials: String,
  initials_background: String,
  location: String,
  vip: Number,
  total_reviews: Number
});

const Review = mongoose.model('reviews', ReviewSchema);

module.exports = { Review }