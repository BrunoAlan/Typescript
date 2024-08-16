"use strict";
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log('We are in trouble');
    }
    else {
        console.log('Avengers to the rescue');
    }
    avengers = Number('55A'); // NaN is considered as a number
    console.log({ avengers });
})();
//# sourceMappingURL=numbers.js.map