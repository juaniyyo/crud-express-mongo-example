const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

const listingsAndReviewsSchema = new mongoose.Schema(
  {
    _id:String,
    listing_url: String,
    name: String,
    summary: String,
    interaction: String,
    house_rules: String,
    property_type: String,
    room_type: String,
    bed_type: String,
    accommodates: Number,
    minimum_nights: String,
    maximum_nights: String,
    cancellation_policy: String,
  },
  { collection: "listingsAndReviews" }
);

listingsAndReviewsSchema.plugin(mongoosePaginate);

const listingsAndReviews = mongoose.model("listingsAndReviews", listingsAndReviewsSchema);

module.exports = listingsAndReviews;
