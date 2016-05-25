/* jshint node: true */
"use strict";

var inquirer = require('inquirer');

var game = require('./game.source');

function playGame(node) {
	var choiceArr = Object.keys(node.conditions);
	if(!choiceArr.length) {
		console.log(node.text);
		return;
	}
	var questions = [
		{
		    type: 'list',
		    name: 'choice',
		    message: node.text,
		    choices: choiceArr
		    // array: key names are the conditions, ie left/right, blue/green/red
	  	}
	];

	inquirer.prompt(questions).then(function(answers) {
		// The conditions[answers.choice] is going to be a key inside the conditions object. 
		// Answer format: { choice: 'left' }
		var nextNode = node.conditions[answers.choice].value; 
		playGame(nextNode);
	});
}

playGame(game.startingPoint);



/**
Question
A question object is a hash containing question related values:

type: (String) Type of the prompt. Defaults: input - Possible values: input, confirm, list, rawlist, password
name: (String) The name to use when storing the answer in the answers hash.
message: (String|Function) The question to print. If defined as a function, the first parameter will be the current inquirer session answers.
default: (String|Number|Array|Function) Default value(s) to use if nothing is entered, or a function that returns the default value(s). If defined as a function, the first parameter will be the current inquirer session answers.
choices: (Array|Function) Choices array or a function returning a choices array. If defined as a function, the first parameter will be the current inquirer session answers. Array values can be simple strings, or objects containing a name (to display in list), a value (to save in the answers hash) and a short (to display after selection) properties. The choices array can also contain a Separator.
validate: (Function) Receive the user input and should return true if the value is valid, and an error message (String) otherwise. If false is returned, a default error message is provided.
filter: (Function) Receive the user input and return the filtered value to be used inside the program. The value returned will be added to the Answers hash.
when: (Function, Boolean) Receive the current user answers hash and should return true or false depending on whether or not this question should be asked. The value can also be a simple boolean.

This file has no test specs. It might be a tricky one. You need to look at
the docs for the inquirer npm package, and see if you can figure out how
to make the game run!

If you're running out of time, check out our solution to the problem:

https://gist.github.com/queerviolet/7d9fb275b292b062fa5b9b4c99eda77d

**/
