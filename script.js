let display = document.getElementById("display");
let calculator = document.getElementById("calculator");
//basically have the first value become concatenated as a string and then when i press the +-/* buttons it will change from value1 to value2 and do it based on whatever was pressed
let value1 ="";
let value2 ="";
let operator = "";
let result = "";
let displayValue = "";
let lastExpression = "";
//so i have blank num 1 num 2 operator and result to calculate everything, when i can set it up, it will be something like 

//function that calls when you press the =, it will take value1, whichever operator you used, and value 2 and convert to number, maybe it does that previously, and then it will do the operation and put it in the return value and also at the end it will clear local storage and add the new final express to that including the answer.

function buttonClick(event) {
    let clickedButton = event.target;
    let buttonValue = clickedButton.textContent;


    //maybe use switch idea from below except only for /*-+= to put in operator variable and change input from value1 to value2


    //an idea i have, if its an operator you need to switch inputs from value1 to value 2, if its equal it calculates based on the operator,
    switch (buttonValue) {
        case "C":
            clearCalculator();
            break;
    // case "=": calculate
        case "+":
        case "-":
        case "/":
        case "*":
            handleOperator(buttonValue);
            break;
        case "0":
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
    display.textContent = displayValue;


    console.log("value1: " + value1, "operator: " + operator, "value2: " + value2);


}

function clearCalculator() {
    value1 = "";
    value2 = "";
    display.textContent = "";
    operator = "";
    result = "";
    lastExpression ="";
    displayValue = "";
}

function handleOperator(symbol) {
    //if there is no value1, meaning no numbers pressed, it wont handle an operator
    if (!value1){
         return;
    }
    displayValue += symbol;
    value2 = value1;
    operator = symbol;
    value1 = "";
}

calculator.addEventListener("mousedown", buttonClick);
//******************************************************************************************/
//come back to this if needed later
//ok i have the text value of the specific thing i clicked, so from here I can start using them to concatenate to value1 or 2, i think i would need to do logic to where if the first clicked is 0 or like an operator then it wont keep going on.
//this is the clear function, maybe i will separate it later
    // if (buttonValue === "C") {
    //     value1 = "";
    //     value2 = "";
    //     display.textContent = "";
    //     operator = "";
    //     result = "";
    //     return;
    // }

    // if (buttonValue == "-" || buttonValue == "+" || buttonValue == "/" || buttonValue == "*" && !operator) {
    //     operator = buttonValue;
    //     value2 = value1;
    //     value1 = "";
    // }
    // //why does work \/ but not as --------\/?
    // if (buttonValue != "-" || buttonValue !== "+" || buttonValue != "/" || buttonValue != "*" || buttonValue != "="){
    //     value1 += buttonValue;        
    // }
