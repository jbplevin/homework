const assert = require('assert');
const Park = require('../park');
const Dinosaur = require('../dinosaur')

describe('Park', function(){

  let park;

  beforeEach(function(){
    park = new Park();
    dinosaur1 = new Dinosaur('Velociraptor', 2);
    dinosaur2 = new Dinosaur('Tyranossaurus', 4);
    dinosaur3 = new Dinosaur('Triceratops', 2);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
  })
  it('should have an enslosure', function(){
    assert.deepStrictEqual(  park.enclosure, [dinosaur1,dinosaur2,dinosaur3]);
  })
  it('should be able to add dinosaurs', function(){
    assert.strictEqual(park.enclosure.length, 3);
  })
  it('should be able to remove dinosaurs by type', function(){
    park.removeByType('Velociraptor');
    assert.strictEqual(park.enclosure.includes('Velociraptor'), false);
  })
  it('should be able to return dinosaurs with more than two offspring',function(){
    assert.deepStrictEqual( park.moreThanTwo(), [dinosaur2] );
  })
})
