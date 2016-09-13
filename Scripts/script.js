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
	var pattern1 = /(\(|^)[0-9]{3}(\/|\.|\)|-|^)[0-9]{3}(\.|\-|^)[0-9]{4}|[0-9]{10}/;
	var result1 = pattern1.test(input);
	
	if (result1){
		alert("Success!");
	}
	else{
		alert("Failure!");
	}
}

function capitalizeFirstName(){
    var x = document.getElementById("firstName");
    x.value = x.value[0].toUpperCase() + x.value.slice(1);
}

function capitalizeLastName(){
    var x = document.getElementById("lastName");
    x.value = x.value[0].toUpperCase() + x.value.slice(1);
}