const previousScreen = document.querySelector('[data-previous]');
const cerrentScreen = document.querySelector('[data-current]');

const numberButtons = document.querySelectorAll('[data-number]')
const clearButton = document.querySelector('[data-clear]')
const operatorBusttons = document.querySelectorAll('[data-operator]')
const delButton = document.querySelector("[data-delete]")

class Calculator {
    constructor(previousScreen, cerrentScreen) {
        this.previousScreen = previousScreen
        this.cerrentScreen = cerrentScreen
        this.cerrentNumber = ""
        this.operator = ""
    }
    appended(number) {
        if (this.cerrentScreen.innerHTML.includes('.') && number === '.') return

        this.cerrentNumber = this.cerrentNumber.toString() + number.toString()

        this.cerrentScreen.innerHTML = Number(this.cerrentNumber).toString() === 'NaN' ? "0" : Number(this.cerrentNumber).toString()
        
        this.cerrentNumber = ""
    }
    clear() {
        this.cerrentNumber = ""
        this.cerrentScreen.innerHTML = "0"
        this.previousScreen.innerHTML = "0"
        this.operator = ""
        this.cerrentNumber = ""
    }
    sum() {
        switch (this.operator) {
            case "+":
                this.cerrentNumber = Number(this.previousScreen.innerHTML) + Number(this.cerrentScreen.innerHTML)
                this.cerrentScreen.innerHTML = this.cerrentNumber.toString()
                break;
            case "-":
                this.cerrentNumber = Number(this.previousScreen.innerHTML) - Number(this.cerrentScreen.innerHTML)
                this.cerrentScreen.innerHTML = this.cerrentNumber.toString()
                break;
            case "x":
                this.cerrentNumber = Number(this.previousScreen.innerHTML) * Number(this.cerrentScreen.innerHTML)
                this.cerrentScreen.innerHTML = this.cerrentNumber.toString()
                break;
            case "/":
                this.cerrentNumber = Number(this.previousScreen.innerHTML) / Number(this.cerrentScreen.innerHTML)
                this.cerrentScreen.innerHTML = this.cerrentNumber.toString()
                break;
            default:
                break;
        }
    }
    addOperator(operator) {
        if (this.operator !== "" && operator !== '=') return
        if (operator !== '=') {
            this.operator = operator
            this.previousScreen.innerHTML = this.cerrentScreen.innerHTML
            this.cerrentScreen.innerHTML = "0"
        } else {
            this.sum()
        }
    }
    del(){
        this.cerrentNumber = this.cerrentScreen.innerHTML.toString().slice(0,-1)
        if(!this.cerrentNumber){
            this.cerrentScreen.innerHTML = 0
        }else{
            this.cerrentScreen.innerHTML = this.cerrentNumber
        }
    }
}
const calculate = new Calculator(
    previousScreen,
    cerrentScreen
)
numberButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        calculate.appended(btn.innerText)
    })
})

clearButton.addEventListener("click", () => {
    calculate.clear()
})

operatorBusttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        calculate.addOperator(btn.innerText)
    })
})

delButton.addEventListener('click', () => {
    calculate.del()
})