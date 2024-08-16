(() => {

      const batman: string = 'Batman';
      const greenLantern: string = 'Green Lantern';
      const blackVulcan: string = `Hero: Black Vulcan`;

      const abc = 123;

      console.log(`I'm ${batman}, ${abc}`);

      console.log(batman.toUpperCase());

      // toUpperCase() from undefined
      console.log(batman[11]?.toUpperCase() || 'not present');

})();