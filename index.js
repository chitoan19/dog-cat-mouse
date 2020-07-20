var Cat = require('./cat');
var Mouse = require('./mouse');
var Dog = require('./dog');

var cat = new Cat();
var mouse = new Mouse('Mickey');
var dog = new Dog();

cat.eat(mouse);
try {
	cat.eat(dog);
} catch (e){
	console.log('Erroe while cat eat dog');
}
console.log(cat);