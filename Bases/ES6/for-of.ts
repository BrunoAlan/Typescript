(() => {

      type Avenger = {
            name: string;
            weapon: string;
      };

      const ironman: Avenger = {
            name: 'Ironman',
            weapon: 'Armor Suit'
      };

      const thor: Avenger = {
            name: 'Thor',
            weapon: 'Mjolnir'
      };

      const captainAmerica: Avenger = {
            name: 'Captain America',
            weapon: 'Shield'
      };

      const avengers: Avenger[] = [ironman, thor, captainAmerica];

      for (const avenger of avengers) {
            console.log(avenger);
      }

})();