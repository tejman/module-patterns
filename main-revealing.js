/*
var makeObject = function() { return {a:1} };
var myObject = makeObject();
// same as:
// IMMEDIATELY-INVOKED FUNCTION EXPRESSION (IIFE)
var myObject = (function() { return {a:1} })();

*/

SentenceModule = {
	toTitleCase: ...,
	toSentenceCase
}

// REVEALING MODULE PATTERN
var SentenceModule = (function SentenceModule() {

	// private
	// this variable will only be accessible within ModuleScope
	// this variable will continue to be accessible by the functions
	// below, because of closure (even after the ModuleScope function
	// has terminated)
	var	excludedWords = {
		the: 0,
		an: 0,
		a: 0,
		at: 0,
		of: 0,
		and: 0,
		"for": 0
	};

	/** Converts a string to Sentence case. */
	var	toSentenceCase = function toSentenceCase(str) {
		return str[0].toUpperCase() + str.substring(1).toLowerCase();
	};

	/** Converts a string to Title Case. */
	var toTitleCase = function toTitleCase(str) {
		var words = str.split(' ');

		for(var i=0, len=words.length; i<len; i++) {
			// if the word is the first word in the sentence
			// OR
			// the word is not on our excluded list
			if(i === 0 || !(words[i].toLowerCase() in excludedWords)) {
				// change word to have the first letter capitalized
				// and the remaining letters lowercase
				words[i] = toSentenceCase(words[i]);
			}
			else {
				// change the word to all lowercase
				words[i] = words[i].toLowerCase();
			}
		};

		return words.join(' ');
	};

	// return an object with two functions
	// this makes up our 'public' module object
	return {
		toSentenceCase: toSentenceCase,
		toTitleCase: toTitleCase
	};

})();

$(function() {
	var input = $('#input').text();
	$('#sentence').text( SentenceModule.toSentenceCase(input) );
	$('#title').text( SentenceModule.toTitleCase(input) );
})