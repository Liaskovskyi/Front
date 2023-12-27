function validateForm() {
    var form = document.getElementById("input-form");
    var displayDiv = document.getElementById("displayData");

    resetStyles();
    displayDiv.innerHTML = '';

    if (form.checkValidity()) {
        displayEnteredData();
    } else {
        var invalidFields = form.querySelectorAll(':invalid');

        if (invalidFields.length > 0) {
            invalidFields.forEach(function (field) {
                field.classList.add("invalid");
            })

            displayDiv.innerHTML = '<p class="error-message">Заповніть всі дані коректно!</p>';
        }
    }
}

function resetStyles() {
    var formFields = document.querySelectorAll('.input-form input');
    formFields.forEach(function (field) {
        field.classList.remove("invalid");
    });
}

function displayEnteredData() {
    var fullName = document.getElementById("fullName").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var idCard = document.getElementById("idCard").value;
    var birthDate = document.getElementById("birthDate").value;
    var email = document.getElementById("email").value;

    displayData.innerHTML = `
        <h2>Entered Data:</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>ID-card:</strong> ${idCard}</p>
        <p><strong>Birth Date:</strong> ${birthDate}</p>
        <p><strong>Email:</strong> ${email}</p>
    `;
}
