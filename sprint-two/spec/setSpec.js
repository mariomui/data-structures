describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('*should only have unique value even if we push in similar values ', function (){
    set.add('Mel Gibson');
    set.add('Mel Gibson');
    set.add('Mel Gibson');
    var foo = (target, set) => {
      var counter = 0;
      for ( var key in set) {
        if ( key === target) {
          counter++;
        }
      }
      return counter;
    } 
    console.log(set);
    expect(foo('Mel Gibson', set._storage)).to.equal(1);
  })
});
