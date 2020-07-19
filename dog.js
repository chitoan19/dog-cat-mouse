function dog(){
	this.stomach = [];
}
//test
dog.prototype.eat(cat){
	this.stomach.push(cat);
};

module.exports = dog;