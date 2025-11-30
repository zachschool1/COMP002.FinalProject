let display = document.getElementById("display");
let calculator = document.getElementById("calculator");
let lastResult = document.getElementById("last-result-display");
let localLastExpression = localStorage.getItem("lastExpression");

if (localLastExpression) {
    lastResult.textContent = localLastExpression;
}
//basically have the first value become concatenated as a string and then when i press the +-/* buttons it will change from value1 to value2 and do it based on whatever was pressed
let value1 ="";
let value2 ="";
let operator = "";
let result = "";
let displayValue = "";
let equalClicked = false;



function buttonClick(event) {
    let clickedButton = event.target;
    let buttonValue = clickedButton.textContent;

    if (equalClicked && buttonValue !== "C") {
        return;
    }

    switch (buttonValue) {
        case "C":
            clearCalculator();
            equalClicked = false;
            break;
        case "=":
            if (equalClicked !== true) {
            displayValue += buttonValue;
            calculateValues();
            equalClicked = true;
            }
            break;
        case "+":
        case "-":
        case "/":
        case "*":
            handleOperator(buttonValue);
            break;
        case "0":
            //if no value1 or value2, do nothing. this fixes leading 0s
            if (!value1 && !value2) {
                break;
            }
        case "1":
        case "2":
        case "3":
        case "4":
        case "5": 
        case "6":
        case "7":
        case "8":
        case "9":
            value1 += buttonValue;
            displayValue += buttonValue;
            break;
        default:
            break;
    }
    display.textContent = displayValue || 0;

    console.log("value1: " + value1, "operator: " + operator, "value2: " + value2, "result " + result);

}

function clearCalculator() {
    value1 = "";
    value2 = "";
    display.textContent = "0";
    operator = "";
    result = "";
    lastExpression ="";
    displayValue = "";
    lastResult.textContent = "";
}

function handleOperator(symbol) {
    //if there is no value1, meaning no numbers pressed, it wont handle an operator. also if an operator exists it wont do anything either.
    if (!value1 || operator !== ""){
         return;
    }
    displayValue += symbol;
    value2 = value1;
    operator = symbol;
    value1 = "";
}

function calculateValues() {
    if (value1 && operator && value2) {
        let firstInputValue = parseFloat(value2);
        let secondInputValue = parseFloat(value1);
        let finalResult = 0;

        switch (operator) {
            case "+":
                finalResult = firstInputValue + secondInputValue;
                break;
            case "-":
                finalResult = firstInputValue - secondInputValue;
                break;
            case "*":
                finalResult = firstInputValue * secondInputValue;
                break;
            case "/":
                if (secondInputValue !== 0){
                finalResult = firstInputValue / secondInputValue;
                break;                    
                }
            default:
                break;
        }
        result = finalResult;
        displayValue += `${result}`;
    }
    lastResult.textContent = displayValue;
    localStorage.setItem("lastExpression", displayValue);

    value1 = "";
    value2 ="";
    operator = "";

}

calculator.addEventListener("mousedown", buttonClick);
