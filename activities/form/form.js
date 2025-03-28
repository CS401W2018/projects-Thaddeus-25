document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();

    const fullname = document.getElementById('fullname').value;
    // console.log(fullname);
    const email = document.getElementById('email').value;    
    const pass = document.getElementById('pass').value;
    

    if (!fullname) {
        alert("You need to enter your name.");
        return;
    }

    const formData = {
        fullname: fullname,
        email: email,
        password: pass,
        state: document.getElementById('state').value
    };

    console.log(formData);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("Form submitted successfully.");
            const response = JSON.parse(xhr.responseText);
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("form").innerHTML = ""
        } else if (xhr.readyState === 4) {
            alert("Error submitting form");
        }
    };
    xhr.send(JSON.stringify(formData));

})