"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hello ${name}`;
    const saveTheWorld = () => `The world is saved!`;
    let myFunction;
    //  ((name: string) => string) 
    // (() => string);
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(greet('John'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
