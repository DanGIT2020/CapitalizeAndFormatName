let myList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function randomNumber () {
	var randomSelect = Math.floor(Math.random()*(myList.length));
	document.getElementById('myOutput').innerHTML = myList[randomSelect];

}

var myInput = prompt("What is your name?");
var lowerString = myInput.toLowerCase();
var firstCharacter = lowerString[0];
var firstCharacterToUpper = firstCharacter.toUpperCase();
var restOfString = lowerString.slice(1);
var finalString = firstCharacterToUpper+restOfString;
alert(finalString);