/*

Objective:
In this activity, you will reinforce the skill of creating and using variables
while practicing best practices in variable naming conventions through a hands-on,
interactive coding challenge.

The code snippet below may include:
  - Ambiguous or incorrect variable names.
  - Missing variables that need to be created.
  - Scenarios that require the use of clear and descriptive variable names.

You will:
  - Identify Issues: Review the provided code and identify any variable names that:
  - Are unclear or too vague (e.g., a, b, c).
  - Do not follow best practices (e.g., camelCase, descriptive naming).
  - Refactor the Code: Rename the variables and rewrite the program using descriptive names that clearly convey the variable's purpose.
  - Enhance the Program: Add at least two additional variables to improve the program’s functionality or clarity.

Things to reflect on:
  - Why is it important to use meaningful variable names?
  - What are the common pitfalls to avoid when naming variables?
  - How do clear variable names benefit team collaboration?
  
*/

let a = "Alice";
let b = 5;
let c = 20;
let d = a + " bought " + b + " items for $" + c + ".";

console.log(d);

Issues: the Name of the variables a,b,c,d are not descriptive enough.
They're too short and not offering any meaning. 
The improved version is as per below.

let accountName = "Alice";
let age = 35;
let city = "London";
let productAmount = 5;
let $dollarValue = 20;
let saleSummary = "Alice" + "age" + 35 + "from" + "London" + " bought " + 5 + " items for $" + 20 + ".";

console.log(saleSummary);
