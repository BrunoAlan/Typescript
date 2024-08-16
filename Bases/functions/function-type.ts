(() => {

      const addNumbers = (a: number, b: number): number => a + b;

      const greet = (name: string): string => `Hello ${name}`;

      const saveTheWorld = () => `The world is saved!`;


      let myFunction: ((a: number, b: number) => number) | any;
      //  ((name: string) => string) 
      // (() => string);

      myFunction = addNumbers;
      console.log(myFunction(1, 2));

      myFunction = greet;
      console.log(greet('John'));

      myFunction = saveTheWorld;
      console.log(myFunction());

})();