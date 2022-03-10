function receivesAFunction(thing) {
    return thing();
}
receivesAFunction (function() {return 5 + 5;});



function returnsANamedFunction (name) {
    return name();
  }
  returnsANamedFunction(function nameOfFunction() { 
      return 4 + 5; });



function returnsAnAnonymousFunction(test) {
    return test();
}
returnsAnAnonymousFunction (function() {return 5 + 5;});