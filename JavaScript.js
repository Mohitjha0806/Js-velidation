


function validationForm() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    //let mobile = document.getElementById("mobile").value;
    //let email = document.getElementById("email").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let userName = document.getElementById("userName").value;
    let age = document.getElementById("age").value;
    let password = document.getElementById("password").value;
    let rePassword = document.getElementById("rePassword").value;

    let isValid = true;


    if (fname == "") {

        document.getElementById("firstNameError").innerHTML = "First name is required";
        isValid = false;
    }
    else {
        document.getElementById("firstNameError").innerHTML = "";
    }

    if (lname == "") {
        document.getElementById("lastNameError").innerHTML = "Last name is required";
        isValid = false;
    } else {
        document.getElementById("lastNameError").innerHTML = "";
    }

    {
        let mobile = document.getElementById('mobile').value;
        let mobileRegex = /^[7-9]{1}[0-9]{9}$/;
        if (mobile == "") {
            document.getElementById("phoneError").innerHTML = "Number is required";
            isValid = false;
        } else if (mobileRegex.test(mobile)) {
            document.getElementById("phoneError").innerHTML = "";
        } else {
            document.getElementById("phoneError").innerHTML = "Please enter a valid Mobile No.";

        }
    }

    {
        let email = document.getElementById('email').value;
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email == "") {
            document.getElementById("emailError").innerHTML = "Email is required";
            isValid = false;
        } else if (emailRegex.test(email)) {
            document.getElementById("emailError").innerHTML = "";


        } else {
            document.getElementById("emailError").innerHTML = "Please enter a valid email address.";

        }
    }



    if (date == "") {
        document.getElementById("dateError").innerHTML = "Date is required";
        isValid = false;
    } else {
        document.getElementById("dateError").innerHTML = "";
    }

    if (time == "") {
        document.getElementById("timeError").innerHTML = "Time is required";
        isValid = false;
    } else {
        document.getElementById("timeError").innerHTML = "";
    }

    if (userName == "") {
        document.getElementById("userError").innerHTML = "User name is required";
        isValid = false;
    } else {
        document.getElementById("userError").innerHTML = "";
    }

    if (age == "") {
        document.getElementById("ageError").innerHTML = "Age is required";
        isValid = false;
    } else {
        document.getElementById("ageError").innerHTML = "";
    }

    if (password == "") {
        document.getElementById("passwordError").innerHTML = "Passsword is required";
        isValid = false;
    } else {
        document.getElementById("passwordError").innerHTML = "";
    }

    if (rePassword == "") {
        document.getElementById("rePasswordError").innerHTML = "Re Password is required";
        isValid = false;
    } else {
        document.getElementById("rePasswordError").innerHTML = "";
    }

    function emailValidation() {
        var email = document.getElementById("email").value;
        var emailError = document.getElementById("emailError");

        emailError.innerHTML = "";

        if (email === "") {
            emailError.innerHTML = "Email is required.";
            return;
        }

        var emailreg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailreg.test(email)) {
            emailError.innerHTML = "Please enter a valid email address.";
        }
    }


    return isValid;
}




