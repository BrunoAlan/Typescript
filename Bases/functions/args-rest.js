"use strict";
(() => {
    const fullName = (first, ...restArgs) => {
        return `${first} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log(superman);
})();
