"use strict";
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
const unirheroes = (...personas) => {
    return personas.join(", ");
};
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
let mystique;
mystique = charles;
mystique = apocalipsis;
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let Force;
    (function (Force) {
        Force[Force["acuaman"] = 0] = "acuaman";
        Force[Force["batman"] = 1] = "batman";
        Force[Force["flash"] = 5] = "flash";
        Force[Force["superman"] = 100] = "superman";
    })(Force || (Force = {}));
    const fuerzaFlash = Force.flash;
    const fuerzaSuperman = Force.superman;
    const fuerzaBatman = Force.batman;
    const fuerzaAcuaman = Force.acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
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
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log(name);
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony');
    console.log(name);
})();
(() => {
    const fullName = (first, ...restArgs) => {
        return `${first} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log(superman);
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hello ${name}`;
    const saveTheWorld = () => `The world is saved!`;
    let myFunction;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(greet('John'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(() => {
    const hero = 'Flash';
    function returnName() {
        console.log(hero);
        return hero;
    }
    const activateBatisignal = () => {
        return 'Signal activated';
    };
})();
(() => {
    var _a;
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
    ;
    let myCustomVariable;
    myCustomVariable = 10;
    console.log(typeof (myCustomVariable));
    myCustomVariable = 'Hello World';
    console.log(typeof (myCustomVariable));
    myCustomVariable = {
        name: 'Bruce Wayne',
        age: 24,
        powers: ['Rich', 'Intelligent'],
    };
    console.log(typeof (myCustomVariable));
})();
(() => {
    let avenger = 123;
    avenger = 150.2323;
    console.log(avenger.toPrecision(2));
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10];
    const typedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const arrayWithMultipleTypes = [1, '2', true];
    const villians = ['Joker', 'Lex Luthor', 'Magneto'];
    villians.forEach((villian) => villian.toUpperCase());
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = isBatman ? true : false;
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["Low"] = 0] = "Low";
        AudioLevel[AudioLevel["Medium"] = 1] = "Medium";
        AudioLevel[AudioLevel["High"] = 2] = "High";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudioLevel = AudioLevel.Medium;
})();
(() => {
    const error = () => {
        throw new Error('Error');
    };
    error();
})();
(() => {
    let nothing = undefined;
    let nothing2 = undefined;
})();
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
    avengers = Number('55A');
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = 'Batman';
    const greenLantern = 'Green Lantern';
    const blackVulcan = `Hero: Black Vulcan`;
    const abc = 123;
    console.log(`I'm ${batman}, ${abc}`);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[11]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'not present');
})();
(() => {
    const hero = ['Dr Strange', 100];
})();
(() => {
    function callBatman() {
        console.log('Batman is coming');
    }
    const callSuperman = () => {
        console.log('Superman is coming');
    };
    const a = callBatman();
})();
//# sourceMappingURL=main.js.map