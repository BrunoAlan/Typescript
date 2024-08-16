(() => {

      const numbers = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10];

      const typedNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      const arrayWithMultipleTypes: (string | number | boolean)[] = [1, '2', true];

      const villians = ['Joker', 'Lex Luthor', 'Magneto'];

      villians.forEach((villian) => villian.toUpperCase());

})();