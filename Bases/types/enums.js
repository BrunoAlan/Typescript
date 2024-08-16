"use strict";
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["Low"] = 0] = "Low";
        AudioLevel[AudioLevel["Medium"] = 1] = "Medium";
        AudioLevel[AudioLevel["High"] = 2] = "High";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudioLevel = AudioLevel.Medium;
})();
//# sourceMappingURL=enums.js.map