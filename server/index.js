require('newrelic');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
const { getAllReviews, getReview, postReview, updateReview, deleteReview } = require('../database/index.js');
const PORT = 3003;

app.use(express.static(path.join(__dirname,  '../public')));
app.use(bodyParser.json());
app.use(compression());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/restaurant/:restaurant_id/reviews', (req, res) => {
  getAllReviews(req, res) 
});
app.get('/api/restaurant/reviews/:_id', (req, res) => {
  getReview(req, res) 
});
app.post('/api/restaurant/:restaurant_id/reviews', (req, res) => {
  postReview(req, res)
})
app.put('/api/reviews/:id', (req, res) => {
  updateReview(req, res)
})
app.delete('/api/reviews/:_id', (req, res) => {
  deleteReview(req, res)
})

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});
