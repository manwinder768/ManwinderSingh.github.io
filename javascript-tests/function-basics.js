window.onload = () => {
    const simpleFunctionDisplay = document.getElementById('simpleFunctionDisplay');
    const functionCallsAction = document.getElementById('functionCallsAction');
    const functionParametersDisplay = document.getElementById('functionParameterDisplay');

    functionCallsAction.onclick = simpleFunction;
    
    function simpleFunction(){
    console.log('functions should consist of statements designed to perform a single task.');
    simpleFunctionDisplay.textContent = "some other text.";
    }
    function functionParameters(){
        console.log(name);
        functionParametersDisplay.textContent ="Many functions take parameters.";
    }

    

function functionParameters(name){
console.log(name);
}

function functionReturn(){
return "Many functions return values.";
}

//simpleFunction();

functionParameters("Many functions take parameters.");

const returnValue = functionReturn();
console.log(returnValue);




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

}