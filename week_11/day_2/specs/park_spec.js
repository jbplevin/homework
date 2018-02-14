const assert = require('assert');
const Park = require('../park');

describe('Park', function(){

  let park;

  beforeEach(function(){
    park = new Park();
  })
  it('should have an enslosure', function(){
    assert.deepStrictEqual(park.enclosure, []);
  })
})
