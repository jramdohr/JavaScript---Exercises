/*
Write a JavaScript program to get the current date.
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy 
*/

var date = new Date();

function addZeroes(number) {
	number = number.toString();
	if (number.length < 2) {
		return "0" + number;
	}
	else {
		return number;
	}
}

function getCurrentDate() {
	var day = addZeroes(date.getDate());
	var month = addZeroes(date.getMonth() + 1);
	var year = date.getFullYear();
	console.log(day + "/" + month + "/" + year);
}

var formattedDate = getCurrentDate();

var el = document.getElementById(test);
el.textContent(formattedDate);