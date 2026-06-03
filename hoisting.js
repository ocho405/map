// 1. Declare a Destination Variable
let destination = "Ancient Egypt";
console.log(destination); // Ancient Egypt

// 2. Change the Destination
destination = "Medieval Europe";
console.log(destination); // Medieval Europe

// 3. Declare a Constant Travel Date
const travelDate = "2024-03-15";
console.log(travelDate); // 2024-03-15

// Trying to change a const will cause an error:
// travelDate = "2025-01-01";
// TypeError: Assignment to constant variable.
// Explanation: const variables cannot be reassigned after initialization.

// 4. Experiment with Variable Hoisting
console.log(timeMachineModel); 
// Output: undefined
// Explanation: var declarations are hoisted to the top,
// but their assignment is NOT hoisted, so the variable exists but is undefined.

var timeMachineModel = "T-800";
console.log(timeMachineModel); // T-800