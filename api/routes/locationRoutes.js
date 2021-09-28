const locationBuilder = require("../controllers/locationController");

module.exports = (app) => {
  // Get all locations
  app.route("/locations").get(locationBuilder.all_locations);

  // Get one location by ID
  app.route("/locations/:locationId").get(locationBuilder.findById);

  // Get location by parameters
  app.route("/search").get(locationBuilder.findByParams);
};
