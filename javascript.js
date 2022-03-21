document.querySelectorAll('button').forEach(button => button.addEventListener('mouseup', function () {
    let display = document.querySelector('#display');
    switch (button.id) {
        case 'digit':
            updateDisplay(button.innerText)
            break;
        case 'decimal':
            if (display.innerText.includes('.')) {
                break;
            } else {
                display.innerText += button.innerText;
            }
            break;
        case 'function':
            switch (button.innerText) {
                case 'AC':
                    display.innerText = 0;
                    calculator.reset()
                    break;
                case '+/-': 
                    display.innerText = parseFloat(display.innerText)*-1;
                    break;
                case 'CE':
                    display.innerText = 0
                    calculator['repetive'] = true;
                    break;  
            }
            break;
        case 'operator':
            if (calculator['firstNum'] == undefined) {
                calculator['firstNum'] = Number(display.innerText);
                calculator['operator'] = button.innerText;
                calculator['repetive'] = true;
            } else {
                display.innerText =  calculator.operate(Number(display.innerText));
                calculator['operator'] = button.innerText
                calculator['repetive'] = true;
            }
            console.log(calculator)
            break; 
        
    }
}))

let calculator = {
    firstNum: undefined,
    operator: undefined,
    repetive: false,
    reset () {
        this.firstNum = undefined;
        this.operator = undefined;
        this.repetive = false;
        return
    },
    operate (secondNum) {
        if (this.operator == '+') {
            result = this.firstNum = this.firstNum + secondNum;
        } else if (this.operator == '-') {
            result = this.firstNum = this.firstNum - secondNum;
        } else if (this.operator == 'x') {
            result = this.firstNum = this.firstNum * secondNum;
        } else if (this.operator == '/') {
            if (secondNum == 0) {
                return 'BOFA'
            }
            result = this.firstNum = this.firstNum / secondNum;
        }
        return result
    },
}


function updateDisplay(button) {
    const display = document.getElementById('display')
    const num = Number(display.innerText);
    if (display.innerText == '0' || calculator['repetive'] == true) {
        display.innerText = button;
        calculator['repetive'] = false;
    } else {
        display.innerText += button;
    }
}
