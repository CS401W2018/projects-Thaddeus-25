document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();

    const username = document.getElementById('username').value;
    // console.log(fullname);
    const email = document.getElementById('email').value;    
    const pass = document.getElementById('pass').value;
    const passLength = pass.length;
    const aDate = document.getElementById("appointment-date").value;
    const phone = document.getElementById("phone").value;
    

    if (!username) {
        alert("You need to enter your name.");
        return;
    }

    if (passLength < 8) {
        alert("Your password should at least contain 8 characters.");
        return
    }

    const formData = {
        username: username,
        email: email,
        password: pass,
        appointment: aDate,
        number: phone 
    };

    console.log(formData);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // alert("Form submitted successfully.");
            const response = JSON.parse(xhr.responseText);
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("form").innerHTML = "";
        } else if (xhr.readyState === 4) {
            alert("Error submitting form");
        }
    };
    xhr.send(JSON.stringify(formData));

})