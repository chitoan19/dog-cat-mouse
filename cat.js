function cat(){
	this.stomach = [];
}
//test
cat.prototype.eat = function(mouse) {
	this.stomach.push(mouse);
};

module.exports = cat;