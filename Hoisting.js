/**
 * In JavaScript, Hoisting is a kind of default behavior in which all the declarations either variable declaration or function declaration are moved at the top of the scope just before executing the program's code.
 *  However, it can be considered an advantage because all functions and variable declarations are placed to the top of their scope no matter where they are all declared anywhere in the whole program, even regardless of whether they are declared global or local.

Due to the concept of hoisting in JavaScript, we can call a function even before we define the function definition in our program's code.
 */


printHello()
// hello

printDillion()
// ReferenceError: printDillion is not defined

function printHello() {
  console.log('hello')

  function printDillion() {
    console.log("dillion")
  }
}
