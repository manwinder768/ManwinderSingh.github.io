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

    functionCallsAction.onclick = simpleFunction;
    

    function simpleFunction(){
    console.log("functions should consist of statements designed to perform a single task.");
    simpleFunctionDisplay.textContent = "simple";
    }    

    
        
    function functionParameters(){
    console.log("Many functions take parameters.");   
    functionParametersDisplay.textContent = "Many functions take parameters.";
    }
    
   

    function functionReturn(){
    return "Many functions return values.";
    }
    //const returnValue = functionReturn();
    //console.log(returnValue);
    //functionReturnDisplay.textContent = returnValue;
    //}




someAction.onclick = function() {
    // Handle the onclick event in here.
    const listDisplay =document.getElementById('listDisplay');
    const nameDisplay = document.getElementById('nameDisplay');
    const userInput = nameDisplay.value;
    console.log('userInput', userInput);
    //const data = nameDisplay.value; 
    elfCode.appendToList(listDisplay, userInput);
}

}