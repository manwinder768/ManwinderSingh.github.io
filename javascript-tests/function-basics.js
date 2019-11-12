
function simpleFunction(){
    console.log('functions should consist of statements designed to perform a single task.')
}

function functionParameters(name){
console.log(name);
}

function functionReturn(){
console.log('Many functions return values.');
}

simpleFunction();
functionParameters("Many functions take parameters.");
functionReturn();

window.onload = () => {
    const simpleFunctionDisplay = document.getElementById('simpleFunctionDisplay');
const functionCallsAction = document.getElementById('functionCallsAction');
}

function simple() {
    console.log('simple');
    simpleFunctionDisplay.textContent = "simple";
}

functionCallsAction.onclick = simple;


const elfCode = {
    appendToList: (list, value) => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(value));
        list.appendChild(li);
    }
}

const someAction = document.getElementById('someAction');
someAction.onclick = function() {
    // Handle the onclick event in here.
    const data = nameDisplay.value; 
    elfCode.appendToList(listDisplay);
}

