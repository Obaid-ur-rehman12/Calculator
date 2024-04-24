const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;

}
function Singleclear() {
    var display = document.getElementById("display")
    display.value = display.value.slice(0, -1)
}


function clearDisplay(){
    display.value = "";
}
 function result(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }

 }