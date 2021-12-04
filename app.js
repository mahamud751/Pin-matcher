function input() {
    const pin = Math.round(Math.random() * 10000);
    const pinLength = pin + '';
    if (pinLength.length == 4) {
        return pin;
    }
    else {
        input();
    }
}
function generatorBtn() {
    const pin = input();
    document.getElementById('generatorInput').value = pin;
}

document.getElementById('keyBtn').addEventListener('click', function (e) {
    const keyPress = e.target.innerText;
    const input = document.getElementById('keyInput');

    if (isNaN(keyPress)) {
        if (keyPress == 'C') {
            input.value = '';
        }
    } else {
        let previousNumber = input.value;
        let newNumber = previousNumber + keyPress;
        input.value = newNumber;
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