function overlflow() {
    overlflow()
}

// This function above causes stack overflow since the execution stack adds this function on top of the previous one and never garbage collect,
// so this causes stackoverflow
overlflow() // RangeError: Maximum call stack size exceeded

// function outOfMemory() {
//   const arr = 
// }