var inputField

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    inputField = document.getElementById('input-field')
    document.addEventListener("keydown", onKeyDown)
    document.getElementById('minus-input').addEventListener("click", onMinusClick)
    document.getElementById('plus-input').addEventListener("click", onPlusClick)
    document.getElementById('enter-input').addEventListener("click", onEnterClick)
}

function onKeyDown(e) {
    e = e || window.event
    if (e.key == "Backspace") {
        onBackspaceClick()
    } else if (e.key == "Enter") {
        onEnterClick()
    } else if (!isNaN(e.key)) {
        onNumberEnter(e)
    }   
}

function onMinusClick() {
    var currentNum = parseInt(inputField.innerText)
    if (currentNum > 0) {
        currentNum--
        inputField.innerText = currentNum
    }
}

function onPlusClick() {
    var currentNum = parseInt(inputField.innerText)
    if (currentNum < 99) {
        currentNum++
        inputField.innerText = currentNum
    }
}

function onBackspaceClick() {
    inputField.innerText = inputField.innerText.slice(0, -1)
    if (inputField.innerText == "") {
        inputField.innerText = "0"
    }
    resizeInput()
}

function onEnterClick() {
    var previousAmounts = document.getElementById('previous-amounts')
    if (previousAmounts.innerText == "0") {
        previousAmounts.innerText = inputField.innerText
    } else {
        previousAmounts.innerText = previousAmounts.innerText + " - " + inputField.innerText
    }
    
    inputField.innerText = "0"
    resizeInput()
}

function onNumberEnter(e) {
    if ((inputField.innerText.length < 3)) {
        if (inputField.innerText == "0") {
           inputField.innerText = ""
        }
        inputField.innerText = inputField.innerText + e.key
        
        resizeInput()
    }
}

function resizeInput() {

    //get the current variable for the font size
    //change it        

    var style = getComputedStyle(document.body)
    var inputFontSize = style.getPropertyValue('--fs-input')
    if (inputField.innerText.length == 1) {
        inputFontSize = "0.5em"
        inputField.fontSize = inputFontSize
    } else if (inputField.innerText.length == 2) {
        inputField.style.fontSize = inputFontSize*0.8
    } else if (inputField.innerText.length == 3) {
        inputField.style.fontSize = inputFontSize*0.5
    }
}