function Cat(){
	this.stomach = [];
}
//test
Cat.prototype.eat = function(mouse) {
	this.stomach.push(mouse);
};

module.exports = cat;