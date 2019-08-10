/*
 Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
*/

var word = "w3resource"
var wordReversed = ""

function reverseWord(word) {
	for (var i = 0; i < word.length; i++) {
		wordReversed = word[-i]
	}
}

reverseWord(word)
console.log(wordReversed)