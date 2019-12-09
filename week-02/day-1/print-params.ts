// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

'use strict';

function printParams (input, ...otherInputs):void {
    for (let i: number = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
}

printParams('askjdakjh', 2345, true);