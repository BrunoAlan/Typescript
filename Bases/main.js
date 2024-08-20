"use strict";
(() => {
    const ironman = {
        name: 'Ironman',
        weapon: 'Armor Suit'
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjolnir'
    };
    const captainAmerica = {
        name: 'Captain America',
        weapon: 'Shield'
    };
    const avengers = [ironman, thor, captainAmerica];
    for (const avenger of avengers) {
        console.log(avenger);
    }
})();
//# sourceMappingURL=main.js.map