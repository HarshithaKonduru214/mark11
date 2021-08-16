const birthDate = document.querySelector('#date');
const luckyNumber = document.querySelector('#lucky-number');
const checkButton = document.querySelector('#check-button');
const result = document.querySelector('.result');
const image = document.querySelector('#image');

checkButton.addEventListener("click", checkBirthdateLucky)

function checkBirthdateLucky() {
    const dob = birthDate.value;
    const sum = calculateSum(dob);
    if(dob&&luckyNumber.value) {
        if(sum % luckyNumber.value === 0) {
            result.innerText = 'Your Birthdate Is Lucky!'
            image.src = "hooray.gif"
        }else {
            result.innerText = 'Your Birthdate Is Not Lucky!'
            image.src = "sorry.gif"
        }
    }else {
        result.innerText = 'Please enter both the fields!'
    }
}

function calculateSum(dob) {
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let i=0; i<dob.length; i++) {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}