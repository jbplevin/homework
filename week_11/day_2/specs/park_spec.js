const assert = require('assert');
const Park = require('../park');
const Dinosaur = require('../dinosaur')

describe('Park', function(){

  let park;

  beforeEach(function(){
    park = new Park();
    dinosaur = new Dinosaur('Velociraptor', 2);
  })
  it('should have an enslosure', function(){
    assert.deepStrictEqual(park.enclosure, []);
  })
  it('should be able to add dinosaurs', function(){
    park.addDinosaur(dinosaur);
    assert.strictEqual(park.enclosure.length, 1);
  })
})
