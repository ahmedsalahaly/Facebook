function Login()
{
    var username=$("#userNameTXT1").val();
    var password=$("#PasswordTXT1").val();
    if (username=="salah" && password=="salo7aa") {
        alert("Login successful");
    }
    else{
        alert("User name or password is wrong");
    }
}
function SignUp()
{
    var valid;
    var firstname=$("userNameTXT2").val; 
    var Surname=$("userNameTXT3").val;   
    var phone=$("PhoneNumberTXT").val;
    var newpassword=$("PasswordTXT2").val;

    if (firstname!=""&&Surname!=""&&phone!=""&&newpassword!="") {
        valid=true;
    } else {
        valid=false;
    }
    return valid;
}