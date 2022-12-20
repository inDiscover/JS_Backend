/**
 * Expressions emit a value
 * Statements do not emit a value
 * 
 * Ex: c=b=a=1 // This is an expression because they all emit value
 * 
 * Ex: c = if(a>b) {} // this is a statement since the emiting of them is not possible. This causes an error.
 * 
 */

// The line below gives an error since statement can not emit
// c = if(2>1)

c = function() {} // expression, no error
c = class {} // expression, no error

c = 1 // expression
c = 1; // statement 



 // Most keywords are statement, not always but mostly (like int, if, for, etc..)

 // ; is called statement terminator but not expression, this is because statement can be terminated but not expressions