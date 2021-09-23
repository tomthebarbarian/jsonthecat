const request = require('request');

// const address = catAPI;

const catrequest = (breedstr ,callback) => {
  const searchurl = `https://api.thecatapi.com/v1/breeds/search?q=${breedstr}`;
  request(searchurl, callback);
};

// catrequest(nameSearch);

module.exports = catrequest;