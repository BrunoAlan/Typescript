(() => {

      type Avengers = {
            nick: string;
            ironman: string;
            vision: string;
            activo: boolean;
            poder: number;
      };

      const avengers = {
            nick: 'Samuel L Jackson',
            ironman: 'Robert Downey Jr',
            vision: 'Paul Bettany',
            activo: true,
            poder: 1500
      };

      const printAvenger = ({ ironman, ...rest }: Avengers): void => {
            console.log(avengers.nick, rest);
      };

      printAvenger(avengers);


      const avengersArray: string[] = ['Thor', 'Spiderman', 'Ironman'];

      const [thor, ironman] = avengersArray;
      console.log(thor, ironman);


})();