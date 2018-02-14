const Park = function(){
  this.enclosure = [];
}
Park.prototype.addDinosaur = function(dinosaur){
  this.enclosure.push(dinosaur);
}
Park.prototype.removeByType = function(type){
  var enclosure = this.enclosure;
  for(dinosaur of enclosure){
    if(dinosaur.type === type){
      enclosure.splice(enclosure.indexOf(dinosaur), 1)
    }
  }
}
Park.prototype.moreThanTwo = function(){
  var enclosure = this.enclosure;
  for(dinosaur of enclosure){
    if(dinosaur.offspringPerYear > 2){
      return enclosure.splice(enclosure.indexOf(dinosaur), 1);
    }
  }
}
module.exports = Park;
