const request = require('request');
// https://api.thecatapi.com/v1/images/search?breed_ids={breed-id}
const usableargs = process.argv;

let breedNM = usableargs[2];


const nameSearch = `htttps://api.thecatapi.com/v1/breeds/search?q=${breedNM}`;

// const address = catAPI;

const catrequest = request(nameSearch, (error, response, body) => {
  if (error !== null) {
    console.log('url not found');
    return;
  }

  if (response) {
    // console.log(response);
  }
  let catobj = JSON.parse(body);

  // console.log(typeof catobj);
  console.log(catobj[0].description);
  return;
});