var password = "1234";

function passcheck() {
	
if(document.getElementById('pass1').value != password) {
alert('Incorrect Password');
	return false;
}

if(document.getElementById('pass1').value == password) {
alert('Correct, Now click the ok button to continue');
}
}