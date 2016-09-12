/*
  	Group Name: The Average Joes
  	Group Members: Bruce Li (Leader)
  				   Matthew H. Irby
  			       Wesley Nguyen
  			       Zachary Gay
    File Name: script.js
	Project: Project 2
    Purpose: This file will act as the JavaScript file for index.html, providing functionality to the page
*/

function submission(){
	var fs = require("fs");
var text = fs.readFileSync("../content/ga_zip_codes.txt");
var textByLine = text.split("\n");
textByLine.toString();
document.getElementById("demo").innerHTML = textByLine;
}