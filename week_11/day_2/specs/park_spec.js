const assert = require('assert');
const Park = require('../park');
const Dinosaur = require('../dinosaur')

describe('Park', function(){

  let park;

  beforeEach(function(){
    park = new Park();
    dinosaur1 = new Dinosaur('Velociraptor', 2);
    dinosaur2 = new Dinosaur('Tyrannossaurus', 4);
    dinosaur3 = new Dinosaur('Triceratops', 2);
  })
  it('should have an enslosure', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    assert.deepStrictEqual(  park.enclosure, [dinosaur1,dinosaur2,dinosaur3]);
  })
  it('should be able to add dinosaurs', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    assert.strictEqual(park.enclosure.length, 3);
  })
  it('should be able to remove dinosaurs by type', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.removeByType('Velociraptor');
    assert.strictEqual(park.enclosure.includes('Velociraptor'), false);
  })
  it('should be able to return dinosaurs with more than two offspring',function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    assert.deepStrictEqual( park.moreThanTwo(), [dinosaur2] );
  })
  it('should be able to calculate number of dinosaurs after 1 year starting with 1 dinosaur', function(){
  park.addDinosaur(dinosaur2);
  assert.strictEqual(park.calculateDinosaurs(1), 4);
});

it('should be able to calculate number of dinosaurs after 2 years starting with 1 dinosaur', function(){
  park.addDinosaur(dinosaur2);
  assert.strictEqual(park.calculateDinosaurs(2), 16);
});
// 
// it('should be able to calculate number of dinosaur after year two starting with 2 dinosaurs', function(){
//   park.addDinosaur(dinosaur2);
//   park.addDinosaur(dilophosaurus);
//   assert.strictEqual(park.calculateDinosaurs(2), 25);
// });
})
