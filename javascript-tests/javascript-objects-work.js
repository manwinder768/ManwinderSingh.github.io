var person = {
    firstName: "Manwinder",
    lastName: "Singh",
    fullName: function() { 'use strict';
        return this.firstName + ' ' + this.lastName;
    }
};   

var calculator = {
    operand01: -1,
    operand02: 0,
    
    addMe: function() { return this.operand01 + this.operand02;
     },
    subtractMe: function(){ return this.operand01 - this.operand02;
    
    }
};
function divider(title) {
    console.log("\n====================================");
    console.log(title);
    console.log("====================================\n");
};
calculator.operand01 = person.firstName.length;
calculator.operand02 = person.lastName.length;
function multiplyNumbers(x , y){
    return x * y;
}
calculator.multiply = multiplyNumbers(calculator.operand01, calculator.operand02);

divider('Person');

console.log('First Name:', person.firstName);
console.log('Last Name:', person.lastName);
console.log('Full Name:', person.fullName());

divider('Calculator');

console.log('operand01 is the length of firstName:', calculator.operand01);
console.log('operand02 is the length of lastName:', calculator.operand02);
console.log('Add length of first and lastName:', calculator.addMe());
console.log('Subtract length of first and lastName:', calculator.subtractMe());
console.log('Multiply length of first and lastName:', calculator.multiply);