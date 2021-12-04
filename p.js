function generatorInput() {
    let pin = Math.round(Math.random() * 10000);
    let pinNumber = pin + '';
    if (pinNumber.length == 4) {
        return pinNumber;
    }
    else {
        return generatorInput();
    }
}
function generatorBtn() {
    const pin = generatorInput();
    document.getElementById('generatorInput').value = pin;
}

document.getElementById('keyBtn').addEventListener('click', function (event) {
    let keyBtn = event.target.innerText;
    let keyInput = document.getElementById('keyInput');

    if (isNaN(keyBtn)) {
        if (keyBtn == 'C') {
            keyInput.value = '';
        }
    }
    else {
        let previousNumber = keyInput.value;
        let newNumber = previousNumber + keyBtn;
        keyInput.value = newNumber;
    }
})

function submit() {
    const generatorInput = document.getElementById('generatorInput').value;
    const keyInput = document.getElementById('keyInput').value;

    const success = document.getElementById('success');
    const fail = document.getElementById('fail');

    if (generatorInput == keyInput) {
        success.style.display = 'block';
        fail.style.display = 'none';
    }
    else {
        success.style.display = 'none';
        fail.style.display = 'block';
    }
}
