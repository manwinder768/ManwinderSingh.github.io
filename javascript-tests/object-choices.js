const simpleObject = {
    sayName: function(){
        console.log('Simple Object');
    }
};

simpleObject.dynamicMethod = () => {
    console.log('Dynamic Method');
};

function FunctionObject(){
    FunctionObject.prototype.sayName = function() {
        console.log('Function Object');
    }
};

class CustomClass{
    sayName(){
       console.log('Custom Class');
    }
};

const functionObject = new FunctionObject();
const customClass = new CustomClass();
simpleObject.sayName();
simpleObject.dynamicMethod();
functionObject.sayName();
customClass.sayName();