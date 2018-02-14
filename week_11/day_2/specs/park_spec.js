const assert = require('assert');
const Park = require('../park');
const Dinosaur = require('../dinosaur')

describe('Park', function(){

  let park;

  beforeEach(function(){
    park = new Park();
    dinosaur1 = new Dinosaur('Velociraptor', 2);
    park.addDinosaur(dinosaur1);
  })
  it('should have an enslosure', function(){
    assert.deepStrictEqual(  park.enclosure, [dinosaur1]);
  })
  it('should be able to add dinosaurs', function(){
    assert.strictEqual(park.enclosure.length, 1);
  })
  it('should be able to remove dinosaurs by type', function(){
    park.removeByType('Velociraptor');
    assert.strictEqual(park.enclosure.includes('Velociraptor'), false);
  })
})
