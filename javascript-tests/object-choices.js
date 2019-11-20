window.onload = () => {

    const simpleObjectDisplay = document.getElementById('simpleObjectDisplay');
    const simpleObjectAction = document.getElementById('simpleOjectAction');
    
    const simpleObject = {
        firstName: 'James',
        lastName: 'Watson',
        sayName: function () {
            const fullName = this.firstName + " " + this.lastName;
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
            console.log('Function Object');
        }
    };

    class CustomClass {
        sayName() {
            console.log('Custom Class');
        }
    };

    const functionObject = new FunctionObject();
    const customClass = new CustomClass();
    //simpleObject.sayName();
    simpleObject.dynamicMethod();
    functionObject.sayName();
    customClass.sayName();




};