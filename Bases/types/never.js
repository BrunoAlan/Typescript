"use strict";
(() => {
    // the function shouldn't have a  reachable end point
    const error = () => {
        throw new Error('Error');
    };
    error();
})();
