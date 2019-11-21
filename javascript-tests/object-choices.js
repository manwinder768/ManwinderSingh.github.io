window.onload = () => {

    const simpleObjectDisplay = document.getElementById('simpleObjectDisplay');
    const simpleObjectAction = document.getElementById('simpleOjectAction');
    
    const simpleObject = {
        firstName: 'James',
        middleName: 'barfoo',
        lastName: 'Watson',

        sayName: function () {
            const fullName = "Get Full Name:   " + this.firstName + " " + this.middleName+ " " + this.lastName;
           // console.log(fullName);
            simpleObjectDisplay.textContent = fullName;
            }
    };

    simpleObjectAction.onclick = function(){
        simpleObject.sayName();
    }

    simpleObject.dynamicMethod = () => {
        console.log('Dynamic Method');
    };

    function FunctionObject() {
        FunctionObject.prototype.sayName = function () {
            //console.log('Function Object');
             functionObjectDisplay.textContent = "Constructor Function Full Name : Rosalind Franklin";
        }
    };
    functionObjectAction.onclick = function(){
        functionObject.sayName();
    }

    class CustomClass {
        sayName() {
            console.log('Custom Class');
            customClassDisplay.textContent = "Custom Class Full Name: Francis Crick";
        }
    };

    customClassAction.onclick = function(){
        customClass.sayName();

    }

    const functionObject = new FunctionObject();
    const customClass = new CustomClass();
    //simpleObject.sayName();
    simpleObject.dynamicMethod();
   // functionObject.sayName();
    //customClass.sayName();




};