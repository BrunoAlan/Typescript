"use strict";
(() => {
    var _a;
    ;
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super speed', 'Time travel'],
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super strength', 'Fly'],
        getName() {
            return this.name;
        }
    };
    console.log((_a = superman.getName) === null || _a === void 0 ? void 0 : _a.call(superman));
})();
(() => {
    const client = {
        name: 'Alan',
        age: 33,
        address: {
            id: 125,
            zip: 'KYD-123',
            city: 'Ottawa'
        },
        getFullAddress(id) {
            console.log(`The address is: ${this === null || this === void 0 ? void 0 : this.address.city}, ${this === null || this === void 0 ? void 0 : this.address.zip}`);
        }
    };
})();
//# sourceMappingURL=main.js.map