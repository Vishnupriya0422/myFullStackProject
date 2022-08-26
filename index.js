// function myInputs(){
//   var x = document.getElementById("first-form");
//   var results = "";
//   for(var i=0; i < x.length; i++){
//     results = results + x.elements[i].value + "<br>";
//   }
//   document.getElementById("demo").innerHTML = results;
// }
// alert(results);

// var nameVal = document.getElementById("first-form");
// nameVal.addEventListener("Submit", handleSubmit);
// alert(nameVal);
var nameVal = document.getElementById("nameID").value;
// var nameVal = "Hello";
document.getElementById("nameMessage").innerHTML = nameVal;

var emailVal = document.getElementById("emailID").value;
document.getElementById("emailMessage").innerHTML = emailVal;

function validate_password() {

            var pass = document.getElementById('pass').value;
            var confirm_pass = document.getElementById('confirm_pass').value;
            if (pass != confirm_pass) {
                document.getElementById('wrong_pass_alert').style.color = 'red';
                document.getElementById('wrong_pass_alert').innerHTML
                  = '☒ Use same password';
                document.getElementById('create').disabled = true;
                document.getElementById('create').style.opacity = (0.4);

            } else if(pass === confirm_pass){
                document.getElementById('wrong_pass_alert').style.color = 'green';
                document.getElementById('wrong_pass_alert').innerHTML =
                    '🗹 Password Matched';
                document.getElementById('create').disabled = false;
                document.getElementById('create').style.opacity = (1);
            }
        }
