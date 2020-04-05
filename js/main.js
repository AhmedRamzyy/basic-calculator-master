var numOne = document.getElementById("num_one");
var numTwo = document.getElementById("num_two");
var answer = document.getElementById("result");

var addButton = document.getElementById("add");
var subtractButton = document.getElementById("subtract");
var divideButton = document.getElementById("divide");
var multiplyButton = document.getElementById("multiply");

// function isInputNumber(evt) {

//     var ch = String.fromCharCode(evt.which);

//     // if (!(/[0-9]/.test(ch)))
//     If (!(/[0-9]/.test(ch) && /[,]"/.test(ch))) {
//         evt.preventDefault();

// }

addButton.addEventListener("click", () => {
    answer.innerHTML = "Answer: " + (+(numOne.value) + +(numTwo.value)) ;
})

subtractButton.addEventListener("click", () =>{
    answer.innerHTML = "Answer: " + (+(numOne.value) - +(numTwo.value)) ;
})

multiplyButton.addEventListener("click", () => {
    answer.innerHTML = "Answer: " + (+(numOne.value) * +(numTwo.value)) ;
})

divideButton.addEventListener("click", () =>{
    if (numTwo.value == 0) alert("Second Number Can`t Be Zero")
    else answer.innerHTML = "Answer: " + (+(numOne.value) / +(numTwo.value)) ;
})