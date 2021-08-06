var username = document.getElementById('username')
var password = document.getElementById('password')
const login = document.getElementById('login')
const error = document.getElementById('error')
login.addEventListener("click",
function(){
    // error.textContent = "Logging in..."
    if(username.value === "Deron" && password.value === "deron"){
        error.textContent = "Logging in..."
    }
    else if (username.value === "" || password.value === "") {
        error.textContent = "We need both password and username"
    } 
    else {
      error.textContent = "Invalid username";
    }
})