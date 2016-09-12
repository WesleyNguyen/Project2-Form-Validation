/*
  	Group Name: The Average Joes
  	Group Members: Bruce Li (Leader)
  				   Matt Irby
  			       Wesley Nguyen
  			       Zachary Gay
    File Name: script.js
    Purpose: This is the javascript file for index.html
*/

// function used to check if phone number input is valid
function numCheck(){
	var input = document.getElementById("phoneNum").value;
}

function capitalizeFirstName(){
    var name = document.getElementById("firstname");
    name.value = name.value[0].toUpperCase() + name.value.slice(1);
}