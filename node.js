var Connection = require('./connection');

var Node = function(title, text) {
	this.title = title;
	this.text = text;
	this.connections = [];
	this.conditions = {};
};

Node.prototype.connect = function(nextNode, condition) {
	if(typeof this.conditions[condition] === 'undefined') {
		var newConnection = new Connection(nextNode, condition);
		this.connections.push(newConnection);
		this.conditions[condition] = newConnection;
	} else {
		throw new Error();
	}
};

module.exports = Node;
