const request = require("request");
const readline = require("readline");
const colors = require("colors");

const endPoint = "https://api.thecatapi.com";
const breedsSearch = "/v1/breeds/search";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Which breed are you looking for? \t".bgYellow, (answer) => {
  console.log(answer);
  request(`${endPoint}${breedsSearch}?q=${answer}`, (err, resp, body) => {
    if (err) {
      console.log(`Request failed! ${err}`.red);
      rl.close();
      return;
    }
    const data = JSON.parse(body);
    if (data.length < 1) {
      console.log("Breed not found!".red);
    } else {
      console.log(data[0].description.green);
    }
  });
  rl.close();
});