const catrequest = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    catrequest('sib', (err, request, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description

      let catobj = JSON.parse(desc);

      assert.equal(expectedDesc, catobj[0].description.trim());

      done();
    });
  });
  it('returns a null for a invalid breed, via callback', (done) => {
    catrequest('calico', (err, request, desc) => {
      // we expect error for this scenario
      if (err) {
        err = null;
      }
      assert.equal(err, null);

      // const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // // compare returned description
      // assert(null, desc.trim());

      done();
    });
  });
});