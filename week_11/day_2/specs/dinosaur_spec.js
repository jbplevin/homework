const assert = require('assert');
const Dinosaur = require('../dinosaur');

describe('Dinosaur', function(){

  let dinosaur;

  beforeEach(function(){
    dinosaur = new Dinosaur('Velociraptor');
  })

  it('should have a type', function(){
    const actual = dinosaur.type;
    assert.strictEqual(actual, 'Velociraptor');
  })
})
