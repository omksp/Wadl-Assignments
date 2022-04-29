const form=document.getElementById("form");

function isvalid(){
    window.alert("sorry");
}

function validation() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var mobile = document.getElementById('phoneno').value;
    var pass = document.getElementById('pass').value;
    var cpass = document.getElementById('cpass').value;
    var email = document.getElementById('email').value;

    if(fname == "") {
        document.getElementById('fnamecheck').innerHTML = " ** <small>Please fill the name field</small>";
        return false;
    }
    if(!isNaN(fname)) {
        document.getElementById('fnamecheck').innerHTML = " ** <small>Only characters are allowed</small>";
        return false;
    }

    if(lname == "") {
        document.getElementById('lnamecheck').innerHTML = " ** <small>Please fill the last name field</small>";
        return false;
    }
    if(!isNaN(user)) {
        document.getElementById('lnamecheck').innerHTML = " ** <small>Only characters are allowed</small>";
        return false;
    }

    if(email == "") {
        document.getElementById('emailids').innerHTML = " ** <small>Please fill the email field</small>";
        return false;
    }
    if(email.indexOf('@') <= 0) {
        document.getElementById('emailids').innerHTML = " **<small> @ position is Invalid</small>";
        return false;
    } 
    if((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
        document.getElementById('emailids').innerHTML = " **<small> . position is Invalid</small>";
        return false;
    } 

    if(pass == "") {
        document.getElementById('password').innerHTML = " **<small> Please fill the password field</small>";
        return false;
    }
    if(pass.length < 6 || pass.length > 20) {
        document.getElementById('cpassword').innerHTML = " ** <small>Password does not match</small> ";
        return false;
    }
      
    if(cpass == "") {
        document.getElementById('cpassword').innerHTML = " ** <small>Please fill the comfirm password field</small>";
        return false;
    }
    if(pass != cpass) {
        document.getElementById('password').innerHTML = " ** <small>Password length must be between 6 and 20</small> ";
        return false;
    }

    if(mobile == "") {
        document.getElementById('phonenocheck').innerHTML = " ** <small>only digits allowed no characters</small>";
        return false;
    }
    if(isNaN(mobile)) {
        document.getElementById('phonenocheck').innerHTML = " ** <small>Please fill the mobile number field</small>";
        return false;
    }
    if(mobile.length !=10) {
        document.getElementById('phonenocheck').innerHTML = " ** <small>Mobile number must have 10 digits only</small>";
        return false;
    }  
    
    form.addEventListener('submit',function(event){
    
        if(isFormValid()==true) {
            form.onsubmit();
        }
        else {
            event.preventDefault();
        }
        
    });
    
    function isFormValid() {
        const inputContainers = form.querySelectorAll('.form-group');
        let result = true;
        return result;
    }
}

