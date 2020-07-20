var Dog = require('./dog');
var Cat = require('./cat');

var dog1 = new Dog('Tom');
var Jerry = new Cat();
dog1.eat(Jerry);

console.log(dog1);