var password = "auwff";

function passcheck() {

  if(document.getElementById('pass1').value != password) {
    alert('wrong password, try again!');
  }
  
  
  if(document.getElementById('pass1').value == password) {
    alert('Correct Password. Click OK!');
  }
}
