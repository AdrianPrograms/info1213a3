
// Color change promt
var bgcolour;
bgcolour = prompt("What is your favourite colour?");
document.body.style.backgroundColor = bgcolour;

// ================ Calculator =================
function calculate()
{

  var selectedValue = document.getElementById("operation").value;

  // Depending on the value of the selected operation,
  // we will call the respective function accordingly.
  switch (selectedValue)
  {
    case "+":
      addNumber();
      break;

    case "-":
      subNumber();
      break;

    case "*":
      mulNumber();
      break;

    case "/":
      divNumber();
      break;

    default:
      break;
  }

}

// Reset the value of all the text field to 0
function clearAll() {
  document.getElementById("x").value = 0;
  document.getElementById("y").value = 0;
  document.getElementById("Result").value = 0;
  theForm.Result.value = 0;
} // End clearAll

// Add x and y values together and display it in Result text field.
function addNumber() {
  document.getElementById("Result").value = parseFloat(document.getElementById("x").value) + parseFloat(document.getElementById("y").value);
} // End addNumber

// Subtract x by y values and display it in Result text field.
function subNumber() {
  document.getElementById("Result").value = document.getElementById("x").value - document.getElementById("y").value;
} // End subNumber

// Multiply x by y values and display it in Result text field.
function mulNumber() {
  document.getElementById("Result").value = document.getElementById("x").value * document.getElementById("y").value;

} // End mulNumber

// Divide x by y values and display it in Result text field.
function divNumber() {
  document.getElementById("Result").value = parseFloat(document.getElementById("x").value) / parseFloat(document.getElementById("y").value);

} // End divNumber


// ================ Color Changer =================
function changeColor() {
  var bgcolorset = document.getElementById("mybgcolor").value;

  document.body.style.backgroundColor = bgcolorset;
      

}
