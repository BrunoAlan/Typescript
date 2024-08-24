"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return text.length > 3;
    };
    Validations.validateDate = (date) => {
        return date < new Date();
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText('Hello'));
//# sourceMappingURL=main.js.map