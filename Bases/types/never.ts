(() => {


      // the function shouldn't have a  reachable end point
      const error = (): never => {
            throw new Error('Error');
      };

      error();

})();