let display = document.getElementById("display");
//basically have the first value become concatenated as a string and then when i press the +-/* buttons it will change from value1 to value2 and do it based on whatever was pressed
let value1 ="";
let value2 ="";


//function that calls when you press the =, it will take value1, whichever operator you used, and value 2 and convert to number, maybe it does that previously, and then it will do the operation and put it in the return value and also at the end it will clear local storage and add the new final express to that including the answer.
function calculate(event) {
    let equals = document.getElementById("button-equals");
    if (event.target === equals) {
        //get value 1 value as a number and value 2 as a number and do whichever operator was clicked.
    }
}
document.addEventListener("click", calculate);
//im not sure how I would structure this to be like ok if the person clicks the operator symbols, then start concatenating to value 2.

