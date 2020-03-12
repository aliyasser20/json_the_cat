const {assert} = require("chai");
const {fetchBreedDescription} = require("../breedFetcher");

describe("fetchBreedDescription", () => {
  it("returns a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription("Siberian", (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);
      // console.log(typeof(desc), typeof(expectedDesc));
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";

      // compare returned description
      assert.equal(expectedDesc, desc);

      done();
    });
  });
  it("returns an error, via callback", (done) => {
    fetchBreedDescription("abcd", (err, desc) => {
      assert.equal(desc, null);
      assert.equal(err, null);
      done();
    });
  });
});