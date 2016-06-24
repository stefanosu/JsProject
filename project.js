var invalid = 0;
var i = 0;
var j = 0;
var length;
var compare;
var k = 0;

function validation() {
 
 invalid = 0;
 length = document.getElementById("Password").value.length;
 
 //Name of User
 if (document.getElementById('name').value == "") {
 	document.getElementById('invalid_1').innerHTML = "You must enter in a name";
 	invalid += 1;
 }
 else {
 	document.getElementById("invalid_1").innerHTML = "";
 }

 //Email

if ((document.getElementById("email").value.indexOf("@")) == -1) {
	document.getElementById('invalid_2').innerHTML = "Invalid Email";
 	invalid += 1;

}

else{
	 document.getElementById("invalid_2").innerHTML = "";

}
	//Password Check
	if (length == 0) {
		compare = document.getElementById("invalid_3").innerHTML = "Password must contatin one uppercase and one lowercase letter";
		invalid += 1;	
	}


	while(i < length)	{
	compare = document.getElementById("Password").value.charAt(i).toUpperCase();

	if (document.getElementById("Password").value.charAt(i) != compare) {

		j = 0;

		while(j < length) {
		compare = document.getElementById("Password").value.charAt(j).toLowerCase();	
		
			if (document.getElementById("Password").value.charAt(j) != compare){
				document.getElementById("invalid_3").innerHTML = "";
				k = 0;
		}
		else if (j == length - 1) && (k == 0){
				document.getElementById("invalid_3").innerHTML = "Password must contatin one uppercase and one lowercase letter";
				invalid += 1; 	
		}
		j++;		
	  
	  }
	
	 } 

	 	else if (i == length - 1) && (k == 0){
		 document.getElementById("invalid_3").innerHTML = "Password must contatin one uppercase and one lowercase letter";
		 	invalid  += 1;		
		}
		
		i++;

	}	




 //Final Validation
 if (invalid += 0) {
 	return false;
 }
 else {
 	return true;
 }

} 