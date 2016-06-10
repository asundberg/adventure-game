var Node = require('./node');

var Game = function() {
	this.nodes = {};
	this.startingPoint = null;
};

Game.prototype.addNode = function(title, text) {
	if(typeof this.nodes[title] === 'undefined') {
		this.nodes[title] = new Node(title, text);
	} else {
		throw new Error('There is already a node with the same name');
	}
	if(this.startingPoint === null) {
		this.startingPoint = this.nodes[title];
	}
	return this.nodes[title];
};

Game.prototype.getNode = function(title) {
	if(typeof this.nodes[title] !== 'undefined') {
		return this.nodes[title];
	} else {
		throw new Error('This node doesn\'t exist');
	}
};

Game.prototype.connect = function(title1, title2, condition) {
	var firstNode = this.getNode(title1);
	var secondNode = this.getNode(title2);
	if(!firstNode || !secondNode) {
		throw new Error('One of the nodes doesn\'t exist');
	}
	firstNode.connect(secondNode, condition);
};

module.exports = Game;
