/*
Write a JavaScript program to display the current day and time in the following format. 
Sample Output : Today is : Friday.
Current time is : 4 PM : 50 : 22
*/

function getCurrentDay() {
	var dayOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var currentDay = new Date();
	console.log ("Today is " + dayOfTheWeek[currentDay.getDay()]);
	
}

function getCurrentTime() {
	var currentTime = new Date();
	var hours = currentTime.getHours() > 12 ? currentTime.getHours() - 12 + "PM": currentTime.getHours() + "AM";
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	console.log ("Current Time is " + hours + " : " + minutes + " : " + seconds);
}

getCurrentDay()
getCurrentTime()