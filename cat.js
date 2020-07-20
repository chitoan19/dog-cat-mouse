var Mouse = require('./mouse');
var Dog = require('./dog');
function cat(){
	this.stomach = [];
}
//test
cat.prototype.eat = function(animal) {
	if (animal instanceof Mouse) {
		animal.isDead = true;
		this.stomach.push(animal);
	} else {
		throw new Error('Cat can only eat mouse !');
	}
};

module.exports = cat;