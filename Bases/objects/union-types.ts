(() => {
      interface Hero {
            name: string,
            age?: number,
            powers: string[];
            getName?: () => string;
      };

      let myCustomVariable: (string | number | Hero);
      myCustomVariable = 10;
      console.log(typeof (myCustomVariable));

      myCustomVariable = 'Hello World';
      console.log(typeof (myCustomVariable));

      myCustomVariable = {
            name: 'Bruce Wayne',
            age: 24,
            powers: ['Rich', 'Intelligent'],
      };
      console.log(typeof (myCustomVariable));
})();