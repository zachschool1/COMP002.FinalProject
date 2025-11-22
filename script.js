let display = document.getElementById("display");
//basically have the first value become concatenated as a string and then when i press the +-/* buttons it will change from value1 to value2 and do it based on whatever was pressed
let value1 ="";
let value2 ="";
let operator = "";
let result = "";
//so i have blank num 1 num 2 operator and result to calculate everything, when i can set it up, it will be something like 

//function that calls when you press the =, it will take value1, whichever operator you used, and value 2 and convert to number, maybe it does that previously, and then it will do the operation and put it in the return value and also at the end it will clear local storage and add the new final express to that including the answer.

function buttonClick(event) {
    let clickedButton = event.target;
    let buttonValue = clickedButton.textContent;
//ok i have the text value of the specific thing i clicked, so from here I can start using them to concatenate to value1 or 2, i think i would need to do logic to where if the first clicked is 0 or like an operator then it wont keep going on.
    if (buttonValue === "0" || buttonValue === NaN) {
        value1 += buttonValue;
    } 

}


function calculate(event) {
    let equals = document.getElementById("button-equals");
    if (event.target === equals) {
        //get value 1 value as a number and value 2 as a number and do whichever operator was clicked.
    }
}


document.addEventListener("click", buttonClick);
//im not sure how I would structure this to be like ok if the person clicks the operator symbols, then start concatenating to value 2.

