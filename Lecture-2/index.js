// Hoiesting in JavaScript

getName();
console.log(x);
var x = 7;

function getName() {
  console.log("Hello MAA");
}

// note:- The above code will not throw an error. It will print undefined for x.
// note:- The above code will print Hello MAA for getName() function.
// note:- The above code will print undefined for x because of hoisting.
/*In JavaScript, hoisting is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that you can use variables and call functions before they are actually declared in your code.

In the provided code snippet, the variable x is declared and assigned a value of 10 on line 9. However, on line 13, when you try to access the value of x, it will print undefined instead of 10. This is because the declaration of x is hoisted to the top of the scope, but the assignment of the value 10 is not hoisted. Therefore, at the time of accessing x on line 13, it has been declared but not yet assigned a value, resulting in undefined.

Here's an example to illustrate this behavior:

In the example above, even though x is accessed before it is declared, it doesn't throw an error. Instead, it prints undefined because the declaration of x is hoisted to the top. However, the assignment of 10 to x is not hoisted, so the second console.log(x) statement prints the actual value of x, which is 10.

It's important to be aware of hoisting in JavaScript to avoid unexpected behavior. To ensure code clarity and readability, it's generally recommended to declare variables at the beginning of their scope and avoid relying on hoisting. */