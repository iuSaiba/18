/*function result () {

var marks = 125;

if (marks > 100) {
	document.getElementById('result').innerHTML ="chapa mara ben na";
}

else if (marks >= 80 && marks <= 100) {
	document.getElementById('result').innerHTML = "A+";
}

else if (marks>= 70 && marks < 80) {
	document.getElementById('result').innerHTML = "A";
}

else if (marks>= 60 && marks < 70) {
	document.getElementById('result').innerHTML = "A-";
}

else if (marks>= 50 && marks < 60) {
	document.getElementById('result').innerHTML = "B";
}

else if (marks>= 40 && marks < 50) {
	document.getElementById('result').innerHTML = "C";
}

else if (marks>= 33 && marks < 40) {
	document.getElementById('result').innerHTML = "D";
}
else {
	document.getElementById('result').innerHTML = "F";
}
}
result();
*/




function ghori() {
	var time = new Date(),
	hour = time.getHours(),
	minit = time.getMinutes(),
	sec = time.getSeconds();
	ampm = ' PM';

// am pm
if (hour < 12 ){
	ampm = 'AM';
}


// conveting ampm
if (hour > 12) {
	hour = hour - 12; 
}
// ara 12 ta
if(hour==0){
	hour= 12;
}
//adding  0 before hour
if (hour < 10) {
	hour = "0" + hour;
}
//adding  0 before hour
if (minit < 10) {
	minit = "0" + minit;
}
//adding  0 before hour
if (sec < 10) {
	sec = "0" + sec;
}

	document.getElementById('clock').innerHTML = hour + ":" + minit + ":" + sec + ampm;
}

setInterval(ghori,1000);
