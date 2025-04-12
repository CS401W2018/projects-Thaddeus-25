document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();

    const username = document.getElementById('name').value;
    const email = document.getElementById('email').value; 
    const ID = document.getElementById("hunterID").value;
    const phone = document.getElementById("number").value;
    

    if (!username) {
        alert("You need to enter your name.");
        return;
    }
    

    const formData = {
        username: username,
        email: email,
        hunterID: ID,
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