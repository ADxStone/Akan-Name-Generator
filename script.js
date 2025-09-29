const form = document.getElementById('AkanForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const DOB = document.getElementById('birthdate').value;
    const genderInput = document.querySelector('input[name="gender"]:checked');
    const gender = genderInput ? genderInput.value : '';

    if (!DOB || !gender) {
        alert('Please enter both your date of birth and gender.');
        return;
    }

    const dateObj = new Date(DOB);
    const dayOfWeek = dateObj.getDay();

    maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    if (gender === 'male') {
        akanName = maleNames[dayOfWeek];
    } else {
        akanName = femaleNames[dayOfWeek];
    }

    const result = document.getElementById('result');
    result.innerHTML = `Your Akan name is: <strong>${akanName}</strong>`;

});