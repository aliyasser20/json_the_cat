const colors = require("colors");
const {fetchBreedDescription} = require("./breedFetcher");

const breedQuery = process.argv[2];

fetchBreedDescription(breedQuery, (err, desc) => {
  if (err) {
    console.log(`Request failed! ${err}`.red);
  } else {
    if (desc) {
      console.log(desc.green);
    } else {
      console.log("Breed not found!".red);
    }
  }
});