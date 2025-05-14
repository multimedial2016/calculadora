let resultDisplay = false

function getDisplay() {
    return document.getElementById("display-cal").value
}
function setDisplay(value) {
    document.getElementById('display-cal').value = value
}

function isOperator(value) {
    return ['+', '-', '*', '/', '%'].includes(value);
}

function appendToDisplay(value) {
    let currentDisplay = getDisplay()

    if (resultDisplay) {
        if (isOperator(value)) {
            setDisplay(currentDisplay + value)
        } else {
            setDisplay(value)
        }
    } else {
        if (currentDisplay === "0") {
            setDisplay(value)
        } else {
            setDisplay(currentDisplay + value)
        }
    }

    resultDisplay = false
}

function calculateResult() {
    let currentDisplay = getDisplay()
    try {
        let result = eval(currentDisplay)
        setDisplay(result)
        resultDisplay = true
    } catch (e) {
        setDisplay("ERROR")
        resultDisplay = true
    }
}

function deleteLast() {
    let current = getDisplay();
    if (current.length > 1) {
        setDisplay(current.slice(0, -1));
    } else {
        setDisplay('0');
    }
}

function clearAll() {
  setDisplay('0');
  resultDisplaye = false;
}