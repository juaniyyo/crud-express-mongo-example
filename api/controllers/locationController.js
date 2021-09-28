const mongoose = require("mongoose");
const listingsAndReviews = mongoose.model("listingsAndReviews");

exports.all_locations = (req, res) => {
  listingsAndReviews
    .find({}, "listing_url name summary description property_type bed_type", { limit: 10, skip: 0 })
    .then((listings) => {
      listingsAndReviews.count({}).then((count) => {
        res.json({ total_listings: count, total_current_page: listings.length, listings: listings });
      });
    })
    .catch((error) => {
      res.send(error.message);
    });
};

// exports.all_locations = async (req, res) => {
//   try {
//     const listings = await listingsAndReviews.find({}, "listing_url name summary description property_type bed_type", {
//       limit: 10,
//       skip: 0,
//     });
//     const count = await listingsAndReviews.count({});
//     res.json({ total_listings: count, total_current_page: listings.length, listings: listings });
//   } catch (err) {
//     console.log("El puto error", err);
//   }
// };

exports.findById = async (req, res) => {
  const data = await listingsAndReviews.findById(req.params.locationId);
  res.json(data);
};

exports.findByParams = async (req, res) => {
  let page = req.query.page;
  let limit = req.query.limit;

  const options = {
    page: page,
    limit: limit,
    collation: {
      locale: "es",
    },
  };
  await listingsAndReviews.paginate({}, options, (err, results) => {
    if (err) {
      res.send(err);
    }
    res.json(results);
  });
};
