window.onload = () => {

    const elfCode = {
        appendToList: (list, value) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }
    }

    const simpleFunctionDisplay = document.getElementById('simpleFunctionDisplay');
    const functionCallsAction = document.getElementById('functionCallsAction');
    const someAction = document.getElementById('someAction');


    function simpleFunction() {
        console.log("functions should consist of statements designed to perform a single task.");
        simpleFunctionDisplay.textContent = "simple";
    }

    

    const functionParametersDisplay = document.getElementById('functionParametersDisplay');

    function functionParameters() {
        console.log("Many functions take parameters.");
        functionParametersDisplay.textContent = "Many functions take parameters.";
    }

    functionCallsAction.onclick = functionParameters;

    const functionReturnDisplay = document.getElementById('functionReturnDisplay');

    function functionReturn() {
        console.log("Many functions return values.");
        functionReturnDisplay.textContent = "Many functions return values";
    }
    functionCallsAction.onclick = simpleFunction;
    functionCallsAction.onclick = functionParameters;
    functionCallsAction.onclick = functionReturn;

    someAction.onclick = function () {
        // Handle the onclick event in here.
        const listDisplay = document.getElementById('listDisplay');
        const nameDisplay = document.getElementById('nameDisplay');
        const userInput = nameDisplay.value;
        console.log('userInput', userInput);
        elfCode.appendToList(listDisplay, userInput);
    }

}