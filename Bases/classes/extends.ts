(() => {

      class Avenger {
            constructor(
                  public name: string,
                  public realName: string,
            ) {
                  console.log('Avenger constructor');
            }

            get fullName(): string {
                  return `${this.name} ${this.realName}`;
            }


            // accessible from the class and the one that extends it
            protected getFullName() {
                  return `${this.name} ${this.realName}`;
            }
      }


      class Xmen extends Avenger {
            constructor(
                  name: string,
                  realName: string,
                  public isMutant: boolean,
            ) {
                  super(name, realName);
                  console.log('Xmen constructor');
            }

            getFullNameFromXmen() {
                  console.log(super.getFullName());
            }

      }


      const wolverine = new Xmen('Wolverine', 'Logan', true);

      console.log(wolverine.fullName);
})();