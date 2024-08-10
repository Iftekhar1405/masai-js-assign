function calculate(num1, num2) {
    function operation(num1, num2, callback) {
        return callback(num1, num2);
    }

    function add(a, b) {
        return a + b;
    }

    function multiply(a, b) {
        return a * b;
    }

    const sum = operation(num1, num2, add);
    console.log(`Addition of ${num1} and ${num2} is: ${sum}`);

    const product = operation(num1, num2, multiply);
    console.log(`Multiplication of ${num1} and ${num2} is: ${product}`);
}

calculate(5, 3);
calculate(7, 2);
calculate(10, 4);
