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
    var x = document.getElementById("firstName");
    x.value = x.value[0].toUpperCase() + x.value.slice(1);
}

function capitalizeLastName(){
    var x = document.getElementById("lastName");
    x.value = x.value[0].toUpperCase() + x.value.slice(1);
}