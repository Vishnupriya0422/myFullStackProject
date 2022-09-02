

// var nameVal = document.getElementById("first-form");
// nameVal.addEventListener("Submit", handleSubmit);
// alert(nameVal);
function getname(){
          var namevalue=document.getElementById("nameID").value;
            localStorage.setItem("nvalue",namevalue);
            window.location.href="request-page.html";
            window.location.href="reset-credential.html";
            window.location.href="set-credential.html";
        }

var name= localStorage.getItem("nvalue");
document.getElementById("nameMessage").innerHTML= name;

// function getemail(){
//  localStorage.clear();
//   var emailvalue = document.getElementById("emailidforgot").value;
//
//   localStorage.setItem("evalue", emailvalue);
//   alert(evalue);
//   window.location.href="forgot-password-info-page.html";
// }
//
// var emailVal = localStorage.getItem("evalue");
// document.getElementById("emailMessage").innerHTML = emailVal;

function validate_password() {

            var pass = document.getElementById('pass').value;
            localStorage.setItem("passval", pass);

            var confirm_pass = document.getElementById('confirm_pass').value;
            if (pass != confirm_pass) {
                document.getElementById('create').disabled = true;
                document.getElementById('create').style.opacity = (0.4);
                return false;

            }
            else if(pass === confirm_pass){
                document.getElementById('create').disabled = false;
                document.getElementById('create').style.opacity = (1);
                return true;
            }
        }



function login_password(){
  var passval_login= localStorage.getItem("passval");
  var login_pass = document.getElementById('login_pass').value;
  if (passval_login !== login_pass && passval_login.length === login_pass.length){
        alert("wrong password: please try again!");
        return false;
  }

  else if(passval_login === login_pass){
    return true;
  }
}
