const request = require("request");
const colors = require("colors");

const endPoint = "https://api.thecatapi.com";
const breedsSearch = "/v1/breeds/search";

const fetchBreedDescription = function(breedName, callback) {
  request(`${endPoint}${breedsSearch}?q=${breedName}`, (err, resp, body) => {
    if (err) {
      return callback(err);
    } else {
      const data = JSON.parse(body);
      let description;
      data.length < 1 ? description = null : description = data[0].description;
      return callback(null, description);
    }
  });
};

module.exports = {
  fetchBreedDescription
};