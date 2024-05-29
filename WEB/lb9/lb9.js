function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    if(evt)evt.currentTarget.className += " active";
}

function togglePassword(inputId) {
    var x = document.getElementById(inputId);
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    // Implement login form validation logic here
    var username = formData.get("loginUsername");
    var password = formData.get("loginPassword");
    var valid = true;

    // Validate username
    if (username.length < 3 || username.length > 15) {
        valid = false;
        document.getElementById("loginUsername").style.borderColor = "red";
        document.getElementById("usernameError").innerText = "Username must be between 3 and 15 characters";
    } else {
        document.getElementById("loginUsername").style.borderColor = "green";
        document.getElementById("usernameError").innerText = "";
    }

    // Validate password
    if (password.length < 6) {
        valid = false;
        document.getElementById("loginPassword").style.borderColor = "red";
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters";
    } else {
        document.getElementById("loginPassword").style.borderColor = "green";
        document.getElementById("passwordError").innerText = "";
    }

    if (valid) {
        // If all fields are valid, proceed with form submission
        showLoader();
        // Simulate form submission with a delay using a Promise
        simulateServerRequest()
            .then(function() {
                hideLoader();
                localStorage.setItem("login",formData.get("loginUsername"))
                location.href="92.html"

            })
            .catch(function(error) {
                hideLoader();
                // Show error message to the user
                alert("An error occurred: " + error);
            });
    }
});

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    // Implement registration form validation logic here
    var username = formData.get("registerUsername");
    var email = formData.get("registerEmail");
    var password = formData.get("registerPassword");
    var confirmPassword = formData.get("confirmPassword");
    var valid = true;

    if (username.length < 3 || username.length > 15) {
        valid = false;
        document.getElementById("registerUsername").style.borderColor = "red";
        document.getElementById("registerUsernameError").innerText = "Username must be between 3 and 15 characters";
    } else {
        document.getElementById("registerUsername").style.borderColor = "green";
        document.getElementById("registerUsernameError").innerText = "";
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        valid = false;
        document.getElementById("registerEmail").style.borderColor = "red";
        document.getElementById("emailError").innerText = "Invalid email format";
    } else {
        document.getElementById("registerEmail").style.borderColor = "green";
        document.getElementById("emailError").innerText = "";
    }

    if (password.length < 6) {
        valid = false;
        document.getElementById("registerPassword").style.borderColor = "red";
        document.getElementById("registerPasswordError").innerText = "Password must be at least 6 characters";
    } else {
        document.getElementById("registerPassword").style.borderColor = "green";
        document.getElementById("registerPasswordError").innerText = "";
    }

    if (confirmPassword !== password) {
        valid = false;
        document.getElementById("confirmPassword").style.borderColor = "red";
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match";
    } else {
        document.getElementById("confirmPassword").style.borderColor = "green";
        document.getElementById("confirmPasswordError").innerText = "";
    }

    if (valid) {
        showLoader();
        simulateServerRequest()
            .then(function() {
                hideLoader();
                alert("Registration successful!");
            })
            .catch(function(error) {
                hideLoader();
                alert("An error occurred: " + error);
            });
    }
});

function simulateServerRequest() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
           resolve()
        }, 1500);
    });
}

function showLoader() {
    document.getElementById("loader").style.display = "block";
}

function hideLoader() {
    document.getElementById("loader").style.display = "none";
}

openTab(event,"login")