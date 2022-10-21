var password = "toboe";

function passcheck() {

  if(document.getElementById('pass1').value != password) {
    alert('wrong password, try again!');
    return false;
  }
  
  
  if(document.getElementById('pass1').value == password) {
    alert('Correct Password. Click OK!');
  }
}
