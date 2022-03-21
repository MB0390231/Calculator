let calculator = {
    firstNum: 10,
    operator: 'x',
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
            result = this.firstNum = this.firstNum / secondNum;
        }
        return result
    },
}
console.log(calculator.operate(10))