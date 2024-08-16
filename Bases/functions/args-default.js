"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || '---'}`.toUpperCase();
        }
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark', false);
    console.log(name);
})();
//# sourceMappingURL=args-default.js.map