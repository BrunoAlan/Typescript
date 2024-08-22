(() => {
      interface Hero {
            name: string,
            age?: number,
            powers: string[];
            getName?: () => string;
      };

      let flash: Hero = {
            name: 'Barry Allen',
            age: 24,
            powers: ['Super speed', 'Time travel'],
      };


      let superman: Hero = {
            name: 'Clark Kent',
            age: 60,
            powers: ['Super strength', 'Fly'],
            getName() {
                  return this.name;
            }
      };

      console.log(superman.getName?.());
})();