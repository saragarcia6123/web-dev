var inputField

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    inputField = document.getElementById('input-field')
    document.addEventListener("keydown", onKeyDown)
    window.addEventListener('resize', onResize)
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

function onResize() {
    resizeInput()
}

function onMinusClick() {
    var currentNum = parseInt(inputField.innerText)
    if (currentNum > 0) {
        currentNum--
        inputField.innerText = currentNum
    }
    resizeInput()
}

function onPlusClick() {
    var currentNum = parseInt(inputField.innerText)
    if (currentNum < 99) {
        currentNum++
        inputField.innerText = currentNum
    }
    resizeInput()
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

    var style = getComputedStyle(inputField).getPropertyValue('--fs-input')
    var initialFS = parseFloat(style.replace(/\D/g, ""))
    if (inputField.innerText.length == 1) {
        inputField.style.fontSize = style
    } else if (inputField.innerText.length == 2) {
        inputField.style.fontSize = initialFS*0.8 + "rem"
    } else if (inputField.innerText.length == 3) {
        inputField.style.fontSize = initialFS*0.5 + "rem"
    }

}