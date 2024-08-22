(() => {
      interface Client {
            name: string;
            age?: number;
            address: Address;
            getFullAddress(id: string): void;
      }

      interface Address {
            id: number;
            zip: string;
            city: string;
      }

      const client: Client = {
            name: 'Alan',
            age: 33,
            address: {
                  id: 125,
                  zip: 'KYD-123',
                  city: 'Ottawa'
            },
            getFullAddress(id: string) {
                  console.log(`The address is: ${this?.address.city}, ${this?.address.zip}`);
            }
      };


})();