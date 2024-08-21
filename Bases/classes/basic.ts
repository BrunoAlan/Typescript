(() => {


      class Avenger {
            // private name: string;
            // public team: string;
            // public realName?: string;
            static avgAge: number = 35;

            static getAvgAge() {
                  return this.avgAge;
            }

            constructor(
                  private name: string,
                  private team: string,
                  public realName?: string,
            ) { }

            public bio(): string {
                  return `${this.name} (${this.team})`;
            }

      }


})();