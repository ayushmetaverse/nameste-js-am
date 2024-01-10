// Call Stack


var num = 2;
function square(num) {
  return num * num;
}
var squareNum = square(num);
var squareNum2 = square(4);

console.log(squareNum);
console.log(squareNum2);


// note:- After code execution, the call stack is empty.
// note:- The call stack is synchronous. It means that the code execution is done line-by-line.
// note:- GEC is pushed to the call stack first, then the square function is pushed to the call stack.
// call stack maintains the order of execution of the functions and execuion context.