//Named function
//1
function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();

//2
function greet(name) {
    console.log("Hello " + name);
}

greet("Vikas");
greet("Rahul");

//3
function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);

//4
function checkEven(num) {
    if (num % 2 === 0) {
        console.log(num + " is Even");
    } else {
        console.log(num + " is Odd");
    }
}

checkEven(8);
checkEven(15);

//5
function totalPrice(price, quantity) {
    return price * quantity;
}

let bill = totalPrice(250, 4);

console.log("Total Bill =", bill);

//Anonymous function 
//1
const greet = function() {
    console.log("Hello World");
};

greet();

//2
const add = function(a, b) {
    console.log(a + b);
};

add(10, 20);

//3
const multiply = function(a, b) {
    return a * b;
};

let result = multiply(5, 6);

console.log(result);

//4
const checkEven = function(num) {
    if (num % 2 === 0) {
        console.log(num + " is Even");
    } else {
        console.log(num + " is Odd");
    }
};

checkEven(15);

//5
setTimeout(function() {
    console.log("Executed after 2 seconds");
}, 2000);


//Function with expression

const greet = function() {
    console.log("Hello");
};

greet();

const add = function(a, b) {
    return a + b;
};

console.log(add(10, 20));

const square = function(num) {
    return num * num;
};

console.log(square(5));

const checkEven = function(num) {
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
};

checkEven(7);

const maximum = function(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
};

console.log(maximum(15, 30));


//First class function

const greet = function() {
    console.log("Hello");
};

greet();

function greet() {
    console.log("Hello");
}

function execute(func) {
    func();
}

execute(greet);

function outer() {
    return function() {
        console.log("Returned Function");
    };
}

const result = outer();

result();

const person = {
    name: "Vikas",
    greet: function() {
        console.log("Hello " + this.name);
    }
};

person.greet();

const functions = [
    function() {
        console.log("First");
    },
    function() {
        console.log("Second");
    }
];

functions[0]();
functions[1]();

//Arrow function 

const greet = () => {
    console.log("Hello");
};

greet();


const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));


const square = num => num * num;

console.log(square(5));


const checkEven = (num) => {
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
};

checkEven(8);


const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);

console.log(doubled);


//Higher order function 

function greet() {
    console.log("Hello");
}

function execute(func) {
    func();
}

execute(greet);


function add(a, b) {
    return a + b;
}

function calculate(a, b, operation) {
    return operation(a, b);
}

console.log(calculate(10, 20, add));


function outer() {
    return function() {
        console.log("Returned Function");
    };
}

const result = outer();

result();


const numbers = [1, 2, 3, 4];

const result = numbers.map(function(num) {
    return num * 2;
});

console.log(result);


const numbers = [1, 2, 3, 4, 5, 6];

const even = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log(even);


//Callback function

function greet() {
    console.log("Hello");
}

function execute(callback) {
    callback();
}

execute(greet);


function add(a, b) {
    return a + b;
}

function calculate(a, b, operation) {
    console.log(operation(a, b));
}

calculate(10, 20, add);


function display(callback) {
    callback();
}

display(function() {
    console.log("Anonymous Callback");
});


function display(callback) {
    callback();
}

display(() => {
    console.log("Arrow Callback");
});


setTimeout(function() {
    console.log("Executed after 2 seconds");
}, 2000);


//Immediately Invoked Function Expression

(function() {
    console.log("Hello");
})();


(function(name) {
    console.log("Hello " + name);
})("Vikas");


const result = (function(a, b) {
    return a + b;
})(10, 20);

console.log(result);


(() => {
    console.log("Arrow Function IIFE");
})();


(function() {
    let message = "Inside IIFE";
    console.log(message);
})();


//Nested function

function outer() {

    function inner() {
        console.log("Hello from Inner Function");
    }

    inner();
}

outer();


function outer() {

    let name = "Vikas";

    function inner() {
        console.log(name);
    }

    inner();
}

outer();


function calculate(a, b) {

    function add() {
        return a + b;
    }

    console.log(add());
}

calculate(10, 20);


function outer() {

    function greet(name) {
        console.log("Hello " + name);
    }

    greet("Vikas");
}

outer();


function outer() {

    let message = "Outer Variable";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();


