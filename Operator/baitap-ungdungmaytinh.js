
function Add() {
    let Number1 = + document.getElementById("number1").value;
    let Number2 = + document.getElementById("number2").value;
    document.getElementById("result").innerHTML = "Result: " + (Number1 + Number2);
}
function Sub() {
    let Number1 = + document.getElementById("number1").value;
    let Number2 = + document.getElementById("number2").value;
    document.getElementById("result").innerHTML = "Result: " + (Number1 - Number2);
}
function Multi() {
    let Number1 = document.getElementById("number1").value;
    let Number2 = document.getElementById("number2").value;
    document.getElementById("result").innerHTML = "Result: " + (Number1 * Number2);
}
function Div() {
    let Number1 = + document.getElementById("number1").value;
    let Number2 = + document.getElementById("number2").value;
    document.getElementById("result").innerHTML = "Result: " + (Number1 / Number2);
}
