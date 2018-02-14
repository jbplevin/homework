const assert = require('assert');
const Dinosaur = require('../dinosaur');

describe('Dinosaur', function(){

  let dinosaur;

  beforeEach(function(){
    dinosaur = new Dinosaur('Velociraptor', 2);
  })

  it('should have a type', function(){
    const actual = dinosaur.type;
    assert.strictEqual(actual, 'Velociraptor');
  })
  it('should have a number of offspring per year', function(){
    const actual = dinosaur.offspringPerYear;
    assert.strictEqual(actual, 2);
  })
})
