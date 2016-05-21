var Connection = require('./connection');

var Node = function(title, text) {
	// Ex: 'the living room', 'Tastefully decorated, with an ominous feeling rising from below'.
	// A location + description of the location.
	this.title = title;
	this.text = text;
	this.connections = []; // Array of objects 
	this.conditions = {}; // Object, consisting of keys (conditions) with the value of the same objects as in the connections array.
};

Node.prototype.connect = function(nextNode, condition) {
	if(typeof this.conditions[condition] === 'undefined') {
		// If the condition doesn't already exist:
		var newConnection = new Connection(nextNode, condition); // Create a new Connection.
		this.connections.push(newConnection); // Push the new Connection into the connections array.
		this.conditions[condition] = newConnection; // And put the new Connection object as the value to the condition key, inside the conditions object.
	} else {
		throw new Error('This condition already exists');
	}
};

module.exports = Node;
