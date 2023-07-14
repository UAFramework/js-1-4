function cardValidator(cardNumber) {
    if (String(cardNumber).length === 16 &&!isNaN(cardNumber)) {
        let cardNumberArray = String(cardNumber).split("");                               // This command will turn 16-digit number into array of numbers
        if(!cardNumberArray.every(number => number === cardNumberArray[0])) {
            let lastNumber = cardNumber % 10;
            if (lastNumber % 2 === 0) {
                function getSumOfSums(num) {                                              // This function will sum all the digits to fidn out whether their sum is 16 or bigger
                const arrayOfNumbers = String(num).split("");
                let sumOfSums = arrayOfNumbers.reduce((acc, el) => acc + Number(el), 0)
                return sumOfSums};
                if (getSumOfSums(cardNumber) >= 16) {
                    return true;
                } else {return false};
            } else {return false};
        } else {return false};
    } else {return false};
};

test("cardValidator works - example true", () => {
  expect(cardValidator(1574262537536544)).toEqual(true);
});

test("cardValidator works - example false1", () => {
  expect(cardValidator(157426253753654)).toEqual(false);
});

test("cardValidator works - example false2", () => {
  expect(cardValidator(1111111111111111)).toEqual(false);
});

test("cardValidator works - example false3", () => {
  expect(cardValidator(1574262537536541)).toEqual(false);
});

test("cardValidator works - example false4", () => {
  expect(cardValidator(1011111111111111)).toEqual(false);
});