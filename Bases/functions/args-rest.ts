(() => {

      const fullName = (first: string, ...restArgs: string[]): string => {
            return `${first} ${restArgs.join(' ')}`;
      };


      const superman = fullName('Clark', 'Joseph', 'Kent');

      console.log(superman);

})();