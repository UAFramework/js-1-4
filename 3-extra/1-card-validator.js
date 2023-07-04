function cardValidator(number) {
    var arr = String(number).split('').map(number => +number);
    return /[0-9]+/.test(number)
        && arr.length === 16
        && arr.slice(-1)[0] % 2 === 0
        && (arr.reduce((accumulator, current) => accumulator + current) > 16)
        && !arr.every(number => number === arr[0]);
}


describe("cardValidator function", () => {
    test("cardValidator", () => {
      expect(cardValidator('9999777788880000')).toEqual(true);
      expect(cardValidator(6666666666661666)).toEqual(true);
      expect(cardValidator('a92332119c011112')).toEqual(false);
      expect(cardValidator(4444444444444444)).toEqual(false);
      expect(cardValidator(1111111111111110)).toEqual(false);
      expect(cardValidator(6666666666666661)).toEqual(false);
    });
});
