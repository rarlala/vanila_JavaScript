const calculator = {
    plus: function(a,b){
        return a + b ; 
    },

    minus: function(a,b){
        return a - b ; 
    },

    multiplication: function(a,b){
        return a * b ; 
    },

    division: function(a,b){
        return a / b ; 
    },

    power: function(a,b){
        return a ** b; 
    }
}

const plus = calculator.plus(5,5);
console.log(plus);

const minus = calculator.minus(5,5);
console.log(minus);

const multiplication = calculator.multiplication(5,5);
console.log(multiplication);

const division = calculator.division(5,5);
console.log(division);

const power = calculator.power(5,5);
console.log(power);

console.log(`${plus}`);

function example(name, age){
    console.log(`Hello ${name} you are ${age} years old`);
 }
 
 example('suji', '99');