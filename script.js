const firstNumberBox = document.getElementById("firstNumberInput");
const secondNumberBox = document.getElementById("secondNumberInput");
const calculateButton = document.getElementById("calculateButton");

const xNumberDisplay = document.getElementById("xNumberDisplay");
const yNumberDisplay = document.getElementById("yNumberDisplay");

const sumResultDisplay = document.getElementById("sumResult");
const prodResultDisplay = document.getElementById("prodResult");
const difResultDisplay = document.getElementById("difResult");
const divResultDisplay = document.getElementById("divResult");
const modResultDisplay = document.getElementById("modResult");

function calculateNumbers()
{
    let firstNumberValue= firstNumberBox.value;
    let secondNumberValue = secondNumberBox.value;

    let x = parseInt(firstNumberValue);
    let y = parseInt(secondNumberValue);

    xNumberDisplay.textContent = "x = " +x;
    yNumberDisplay.textContent = "y = " +y;

    sumResultDisplay.textContent = operations(x, y, "+");
    difResultDisplay.textContent = operations(x, y, "-");
    prodResultDisplay.textContent = operations(x, y, "*");
    divResultDisplay.textContent = operations(x, y ,"/");
    modResultDisplay.textContent = operations(x, y, "%");


}

function operations(firsNumber, secondNumber, operand)
{
    switch (operand){
        case "+":
            let sum = firsNumber + secondNumber;
            return sum;
        case "-":
            let dif = firsNumber - secondNumber;
            return dif;
       case"*":
            let prod = firsNumber * secondNumber;
            return prod; 
       case "/":
            let div = firsNumber / secondNumber;
            return div;

       case "%":
            let mod = firsNumber % secondNumber;
            return mod;
    }

}