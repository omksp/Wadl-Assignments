
// total visitors counter
var n = localStorage.getItem('on_load_counter');
if (n === null) {
  n = 0;
}
n++;

localStorage.setItem("on_load_counter", n);

nums = n.toString().split('').map(Number);
document.getElementById('CounterVisitor').innerHTML = 'Total Visits';
for (var i of nums) {
  document.getElementById('CounterVisitor').innerHTML += '<span class="counter-item" style="border: 1px solid white; margin:2px"> ' + i + ' </span>';
}




//validate form for signup
function validateForm() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let password =  document.getElementById("password").value;
    let confirmPassword =  document.getElementById("confirmPassword").value;
    let phoneNo = document.getElementById("phoneNo").value;
    
    if(phoneNo.length != 10){
        windows.alert("Mobile number must be 10 digit long");
    }
    else if(password != confirmPassword || password.length <6){
        window.alert("Please check your password!! must be 6 characters long" );
    }
    else{

    let userdata={
        fname:fname,
        lname:lname,
        email:email,
        password:password,
        phoneNo:phoneNo
    }
    userdata = JSON.stringify(userdata);
    console.log(userdata)
}
    
    
}

//credentials to check for login
const credentials={
    email: "asdf@aa.com",
    password: "Pass@123"
}


// to check login credentials
function myFunction() {
    let email = document.getElementById("email").value;
    let password =  document.getElementById("password").value;
    if(email != credentials.email ){
        window.alert("Please check Your Email ID "+email);
        console.log("LogIn unsuccessfull !!! Please check Your email")
    }
    else if(password != credentials.password){
        window.alert("Please Check Your Password ");
        console.log("Logg In unsuccessful check your password")
    }
    else{
        window.alert("logged in successfully " + email + password)
        console.log("Logged In successfully")
    }

}



//sidebar functions
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
  
function w3_close() {
document.getElementById("mySidebar").style.display = "none";
document.getElementById("myOverlay").style.display = "none";
}


// display contact message in json format on console
function contact(){
    const name =  document.getElementById("name").value;
    const inputEmail4 = document.getElementById("inputEmail4").value;
    const  message = document.getElementById("message").value;
    const user = {
        name:name,
        email:inputEmail4,
        message:message 
    }
    console.log(user);
    const user1 = JSON.stringify(user);
    console.log(user1);
}

