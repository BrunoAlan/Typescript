(() => {

      const hero = {
            a: 1,
            b: 2
      };

      const getName = (): void => {
            console.log("old getName");
      };


      // getName = () => console.log('new getName');
      // getName();

})();