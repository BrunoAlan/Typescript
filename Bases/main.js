'use strict';
(() => {
  class Avenger {
    static getAvgAge() {
      return this.avgAge;
    }
    constructor(name, team, realName) {
      this.name = name;
      this.team = team;
      this.realName = realName;
    }
    bio() {
      return `${this.name} (${this.team})`;
    }
  }
  Avenger.avgAge = 35;
})();
(() => {
  class Avenger {
    constructor(name, realName) {
      this.name = name;
      this.realName = realName;
      console.log('Avenger constructor');
    }
    get fullName() {
      return `${this.name} ${this.realName}`;
    }
    getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }
  class Xmen extends Avenger {
    constructor(name, realName, isMutant) {
      super(name, realName);
      this.isMutant = isMutant;
      console.log('Xmen constructor');
    }
    getFullNameFromXmen() {
      console.log(super.getFullName());
    }
  }
  const wolverine = new Xmen('Wolverine', 'Logan', true);
  console.log(wolverine.fullName);
})();
//# sourceMappingURL=main.js.map
