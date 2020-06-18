function changeColor(theColor){ 
    navbarColor = document.getElementById("navbar");
    navbarColor.style.backgroundColor = theColor;

}

//-------------------------------------------------------------------------------
// This function checks if the text fields are empty to prevent message from being sent.  
function isFieldEmpty(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
   
    
    if (name.length == 0){
        alert("Please enter your name");
    } else if (email.length == 0){
        alert("Please enter your E-mail");
    } else if (message.length == 0){
        alert("The is no message to send");
    } else {
        return true;
    }

}
// This function checks if the E-mail is valid before sending the message.
function checkEmail(){
    var email = document.getElementById("email").value;
    var validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var booleanValid;
    
    
    if (email.match(validateEmail)){
        document.getElementById("emailcheck").value = "Email is valid";
        return true;
    } else {
        document.getElementById("emailcheck").value = "Email is invalid";
        alert("This email is not valid");
    }
}
// This function checks to see if the name contains no symbols before sending the message.
function checkName(){
    var name = document.getElementById("name").value;
    var count = 0;
    for (var i=0; i < name.length; i++){
        if (name[i] == "%") {
            //alert("Please Remove Symbols from your name");
         } else if (name[i] == "^") {
            //alert("Please Remove Symbols from your name");  
          } else if (name[i] == "!") {
            //alert("Please Remove Symbols from your name"); 
          } else if (name[i] == "$") {
            //alert("Please Remove Symbols from your name");
          } else if (name[i] == "# ") {
            //alert("Please Remove Symbols from your name");
          } else if (name[i] == "@") {
            //alert("Please Remove Symbols from your name"); 
          } else if (name[i] == "*") {
            //alert("Please Remove Symbols from your name"); 
          } else if (name[i] == "-") {
            //alert("Please Remove Symbols from your name"); 
          } else if (name[i] == "+") {
            //alert("Please Remove Symbols from your name");
          } else if (name[i] == "/") {
            //alert("Please Remove Symbols from your name");
          } else if (name[i] == "\\") {
            //alert("Please Remove Symbols from your name");
          } else if (name[i] == "=") {
            //alert("Please Remove Symbols from your name"); 
          } else if (name[i] == ";") {
            //alert("Please Remove Symbols from your name");
         }  else {
           count += 1;         
         }
    } 
    
    if ((count) == name.length){
        return true;
    } else {
        alert("Please Remove Symbols from your name");
    }   

}
// This function runs all the functions needed to properly validate the user's info before sending the message.
function validate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    isFieldEmpty();
    if (isFieldEmpty() == true){
        checkEmail();
        if (checkEmail() == true){
            checkName();
            if (checkName() == true){
                alert("Your message was sent");
            } 
        } 
    } 


}

//==================================================================================================================================

//FOR SPRINT 3