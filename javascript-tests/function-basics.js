window.onload = () => {
    const simpleFunctionDisplay = document.getElementById('simpleFunctionDisplay');
    const functionCallsAction = document.getElementById('functionCallsAction');
    const functionParametersDisplay = document.getElementById('functionParameterDisplay');
    const functionReturnDisplay = document.getElementById('functionReturnDsiplay');

    functionCallsAction.onclick = simpleFunction;
    function simpleFunction(){
    console.log('functions should consist of statements designed to perform a single task.');
    simpleFunctionDisplay.textContent = "functions should consist of statements designed to perform a single task.";
    }
    

    functionCallsAction.onclick = functionParameters;
    function functionParameters(){
    console.log('Many functions take parameters.');   
    functionParametersDisplay.textContent = "Many functions take parameters.";
    }
    
    functionCallsAction.onclick = functionReturn;
    function functionReturn(){
    return "Many functions return values.";
    const returnValue = functionReturn();
    console.log(returnValue);
    functionReturnDisplay.textContent = returnValue;
    }

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