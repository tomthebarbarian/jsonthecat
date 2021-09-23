const request = require('request');
// https://api.thecatapi.com/v1/images/search?breed_ids={breed-id}
const usableargs = process.argv;
const catrequest = require('./breedFetcher');
let breedNM = usableargs[2];


// const nameSearch = `https://api.thecatapi.com/v1/breeds/search?q=${breedNM}`;
catrequest(breedNM,
  (error, response, body) => {
    if (error !== null) {
      // console.log('url not found');
      console.log('Error fetch details:', error);

      return;
    } else {

      if (response) {
        // console.log(response);
      }
      let catobj = JSON.parse(body);

      // console.log(typeof catobj);
      console.log(catobj[0].description);
      return;
    }
  });