(() => {

      interface Xmen {
            name: string;
            realName: string;
            mutantPower(id: string): string;
      }


      class Mutant implements Xmen {
            public name: string;
            public realName: string;
            mutantPower(id: string): string {
                  return 'Power';
            }

            constructor(name: string, realName: string) {
                  this.name = name;
                  this.realName = realName;
            }
      }


})();