//selectors for the display, the calculator as whole, the last result display at the bottom
let display = document.getElementById("display");
let calculator = document.getElementById("calculator");
let lastResult = document.getElementById("last-result-display");

//get the last expression from local storage
let localLastExpression = localStorage.getItem("lastExpression");
//if there is a last local storage, display it in the last-result-display spam
if (localLastExpression) {
    lastResult.textContent = localLastExpression;
}
//initialize everything as blank, and as equal sign as not having been clicked yet.
let value1 ="";
let value2 ="";
let operator = "";
let result = "";
let displayValue = "";
let equalClicked = false;


//function for when you click a button
function buttonClick(event) {
    let clickedButton = event.target;
    //get the text value of whichever button you click
    let buttonValue = clickedButton.textContent;
    //if you have already clicked equal, and youre clicking anything that isnt C, nothing will happen.
    if (equalClicked && buttonValue !== "C") {
        return;
    }
    //switch for all of the different buttons
    switch (buttonValue) {
        //if clear button pressed, clearCalculator is called and equalClicked is set to false.
        case "C":
            clearCalculator();
            equalClicked = false;
            break;
        case "=":

        //if = button is pressed, check if there is a value1, value2, an operator, and if equalclicked is false(not entirely sure why i went with 'not true')
            if (value1 && operator && value2 && equalClicked !== true) {
            //concatenate = button to displayValue
            displayValue += buttonValue;
            //function to calculate values
            calculateValues();
            //lets program know that you've clicked = to prevent multiple =.
            equalClicked = true;
            }
            break;
        case "+":
        case "-":
        case "/":
        case "*":
        //if /-*+ is pressed, call function handleOperator with whichever value of the button is that is pressed passed in.
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
            //if 123456789 is pressed, value1 and display value strings get concatenated with the buttons value.
            value1 += buttonValue;
            displayValue += buttonValue;
            break;
        default:
            break;
    }
    //sets the display to be whatever the displayValue is, updates every click.
    display.textContent = displayValue || 0;
}

function clearCalculator() {
    //this function gets called when you press the C button. it basically reinitializes everything to be blank.
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
    //concatenates the symbol to the display
    displayValue += symbol;
    //copy value1 to value 2
    value2 = value1;
    //copy whatever symbol was pressed to oeprator
    operator = symbol;
    //sets value1 to blank, so that you can start inputting a new number
    value1 = "";
}

function calculateValues() {
    //if there is a value1, value2 and an operator,
    if (value1 && operator && value2) {
        //get the float values for value 1 and 2
        let firstInputValue = parseFloat(value2);
        let secondInputValue = parseFloat(value1);
        //initialize finalResult to be 0 since no calculations have happened.
        let finalResult = 0;

        switch (operator) {
            //based on the operator, perform math stuff and copy it to finalResult
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
        //copies finalResult to result - going over this im not sure if i need this.
        // result = finalResult; i deleted this and changed the last thing
        //concatenates the result to the display
        displayValue += `${finalResult}`;
    }
    //sets the last result to the displayValue, being the entire expression i.e. 2+4=6.
    lastResult.textContent = displayValue;
    //saves the display value in to the lastExpression key
    localStorage.setItem("lastExpression", displayValue);
    //clears value1, value2, and operator.
    value1 = "";
    value2 ="";
    operator = "";

}
//event listener when a button is clicked
calculator.addEventListener("mousedown", buttonClick);
