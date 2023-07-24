let screen = document.getElementById("display1");
buttons = document.querySelectorAll(".b3");
let screenValue = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "Dark Mode") {
        buttonText = "";
        screenValue += buttonText;
        screen.value = screenValue;
    }
    else if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } 
    else if (buttonText == "÷") {
      buttonText = "/";
      screenValue += buttonText;
      screen.value = screenValue;
    } 
    else if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    }
    else if (buttonText == "=") {
    var result;
    try {
    result = eval(screenValue);
    } catch (error) {
    result = "Expr. error";
    }
      screen.value = result;
    } 
    else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}

let buttondiv = document.getElementById("b2");
function colourchange(){
    var element = document.body;
    element.classList.toggle("dark-mode");
    if (element.classList.contains("dark-mode")) {
        buttondiv.innerText = "Remove Background";
        buttondiv.style.background = "crimson";
    }
    else {
        buttondiv.innerText = "Add Background";
        buttondiv.style.background = "black";
    }
}

let buttondiv2 = document.getElementById("b5");
let darkcolours = document.querySelectorAll(".b3");
let containerdiv = document.getElementById("containerdark");
function colourchange2() {
  var element2 = document.body;
  element2.classList.toggle("dark-buttons");

  if (element2.classList.contains("dark-buttons")) {
    buttondiv2.style.background = "crimson";
    darkcolours.forEach(function(element) {
      element.style.background = "crimson";
      element.style.color = "white";
      containerdiv.style.transition = "0.3s ease-in-out";
    });
    containerdiv.style.backgroundColor = "black";
    containerdiv.style.border = "3px solid red";
    containerdiv.style.transition = "0.3s ease-in-out";
  } else {
    buttondiv2.style.background = "black";
    darkcolours.forEach(function(element) {
      element.style.background = "";
      element.style.color = "";
    });
    containerdiv.style.backgroundColor = "white";
    containerdiv.style.border = "3px solid pink";
  }
}










