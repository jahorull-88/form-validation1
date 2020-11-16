function myFunction(){
	var name = document.getElementById("uname");
	var email = document.getElementById("email")
	var password = document.getElementById("pass");
	var password2 = document.getElementById("pass2");

if(name.value=="" || password.value=="" || email.value=="") {
	alert("please fill all fields");
	return false;
}else if (password.value.length<8) {

alert("password too short");
return false;

}else if (password.value!==password2.value) {
	alert("password don't match");
	return false;
}else{
	return true;
}

}