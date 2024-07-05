// import ConverterFn from "../libs/converterFn";
import Converter from "../libs/converter";
const onlyStrNum = new Converter();

function testConverter(inputTarget, outputTarget, input) {
  onlyStrNum.selectedLeftItem = inputTarget;
  onlyStrNum.selectedRightItem = outputTarget;
  onlyStrNum.newInput = input;
  return onlyStrNum.output;
}

// TEXT START ------------------------------------------------------------------------------
// Text to binary
describe.each([
  ["", ""],
  ["a", "1100001"],
  ["abc", "1100001 1100010 1100011"],
  ["123", "110001 110010 110011"],
  ["&*uUda2", "100110 101010 1110101 1010101 1100100 1100001 110010"],
])("Convert Text to binary", (input, expected) => {
  test(`should return '${expected}'`, () => {
    expect(testConverter("Text", "Binary", input)).toBe(expected);
  });
});

// Text to decimal
describe.each([
  ["", ""],
  ["a", "97"],
  ["abc", "97 98 99"],
  ["123", "49 50 51"],
  ["&*uUda2", "38 42 117 85 100 97 50"],
])("Convert Text to Decimal", (input, expected) => {
  test(`should return '${expected}'`, () => {
    expect(testConverter("Text", "Decimal", input)).toBe(expected);
  });
});

// Text to Hexadecimal
describe.each([
  ["", ""],
  ["a", "61"],
  ["abc", "61 62 63"],
  ["123", "31 32 33"],
  ["&*uUda2", "26 2A 75 55 64 61 32"],
])("Convert Text to Hexadecimal", (input, expected) => {
  test(`should return '${expected}'`, () => {
    expect(testConverter("Text", "Hexadecimal", input)).toBe(expected);
  });
});

// Text to Octal
describe.each([
  ["", ""],
  ["a", "141"],
  ["abc", "141 142 143"],
  ["123", "61 62 63"],
  ["&*uUda2", "46 52 165 125 144 141 62"],
])("Convert Text to Octal", (input, expected) => {
  test(`should return '${expected}'`, () => {
    expect(testConverter("Text", "Octal", input)).toBe(expected);
  });
});
// TEXT END --------------------------------------------------------------------------------

// BINARY START -----------------------------------------------------------------------------
// Binary to Text
describe.each([
  ["", ""],
  ["1100001", "a"],
  ["100110 101010 1110101 1010101 1100100 1100001 110010", "&*uUda2"],
  ["18713092", "Please enter an ASCII binary digit."],
  ["10*1abc", "Please enter an ASCII binary digit."],
  ["100111011", "Please use ASCII binary format '01100001 01100010 ...'"],
])("Convert Binary to Text", (input, expected) => {
  test(`should return '${expected}'`, () => {
    expect(testConverter("Binary", "Text", input)).toBe(expected);
  });
});

// Binary to Decimal
describe.each([
  ["", ""],
  ["1010", "10"],
  ["1000100101100111011100001", "18009825"],
  ["1004810", "Please enter a binary digit."],
  ["10s001d01", "Please enter a binary digit."],
])("Convert Binary to Decimal", (input, expected) => {
  test(`should return '${expected}'`, () => {
    expect(testConverter("Binary", "Decimal", input)).toBe(expected);
  });
});

// Binary to Octal
describe.each([
  ["", ""],
  ["1010", "12"],
  ["1000100101100111011100001", "104547341"],
  ["1004810", "Please enter a binary digit."],
  ["10s001d01", "Please enter a binary digit."],
])("Convert Binary to Octal", (input, expected) => {
  test(`should return '${expected}'`, () => {
    expect(testConverter("Binary", "Octal", input)).toBe(expected);
  });
});

// Binary to Hexadecimal
describe.each([
  ["", ""],
  ["1010", "A"],
  ["1000100101100111011100001", "112CEE1"],
  ["1004810", "Please enter a binary digit."],
  ["10s001d01", "Please enter a binary digit."],
])("Convert Binary to Hexadecimal", (input, expected) => {
  test(`should return '${expected}'`, () => {
    expect(testConverter("Binary", "Hexadecimal", input)).toBe(expected);
  });
});
// BINARY END -------------------------------------------------------------------------------

// DECIMAL START ----------------------------------------------------------------------------
// Decimal to Text
describe.each([
  ["", ""],
  ["65", "A"],
  ["65 100 36 50", "Ad$2"],
  ["18009825", "Please enter an ASCII decimal number."],
  ["10s&01$cd1", "Please enter a decimal digit."],
])("Convert Decimal to Text", (input, expected) => {
  test(`should return '${expected}'`, () => {
    expect(testConverter("Decimal", "Text", input)).toBe(expected);
  });
});

// Decimal to Binary
describe.each([
  ["", ""],
  ["6", "110"],
  ["18009825", "1000100101100111011100001"],
  ["10s&01$cd1", "Please enter a decimal digit."],
])("Convert Decimal to Binary", (input, expected) => {
  test(`should return '${expected}'`, () => {
    expect(testConverter("Decimal", "Binary", input)).toBe(expected);
  });
});

// Decimal to Octal
describe.each([
  ["", ""],
  ["6", "6"],
  ["18009825", "104547341"],
  ["10s&01$cd1", "Please enter a decimal digit."],
])("Convert Decimal to Octal", (input, expected) => {
  test(`should return '${expected}'`, () => {
    expect(testConverter("Decimal", "Octal", input)).toBe(expected);
  });
});

// Decimal to Hexadecimal
describe.each([
  ["", ""],
  ["6", "6"],
  ["18009825", "112CEE1"],
  ["10s&01$cd1", "Please enter a decimal digit."],
])("Convert Decimal to Hexadecimal", (input, expected) => {
  test(`should return '${expected}'`, () => {
    expect(testConverter("Decimal", "Hexadecimal", input)).toBe(expected);
  });
});
// DECIMAL END ------------------------------------------------------------------------------

// OCTAL START ------------------------------------------------------------------------------
// Octal to Text
describe.each([
  ["", ""],
  ["125", "U"],
  ["125 60 141 40 45", "U0a %"],
  ["125 1700425 60", "Please enter an ASCII octal number."],
  ["10s&01$cd1", "Please enter an octal digit."],
])("Convert Octal to Text", (input, expected) => {
  test(`should return '${expected}'`, () => {
    expect(testConverter("Octal", "Text", input)).toBe(expected);
  });
});

// Octal to Binary
describe.each([
  ["", ""],
  ["125", "1010101"],
  ["536712907", "Please enter an octal digit."],
  ["10s&01$cd1", "Please enter an octal digit."],
])("Convert Octal to Binary", (input, expected) => {
  test(`should return '${expected}'`, () => {
    expect(testConverter("Octal", "Binary", input)).toBe(expected);
  });
});

// Octal to Decimal
describe.each([
  ["", ""],
  ["125", "85"],
  ["536712907", "Please enter an octal digit."],
  ["10s&01$cd1", "Please enter an octal digit."],
])("Convert Octal to Decimal", (input, expected) => {
  test(`should return '${expected}'`, () => {
    expect(testConverter("Octal", "Decimal", input)).toBe(expected);
  });
});

// Octal to Hexadecimal
describe.each([
  ["", ""],
  ["125", "55"],
  ["536712907", "Please enter an octal digit."],
  ["10s&01$cd1", "Please enter an octal digit."],
])("Convert Octal to Hexadecimal", (input, expected) => {
  test(`should return '${expected}'`, () => {
    expect(testConverter("Octal", "Hexadecimal", input)).toBe(expected);
  });
});
// OCTAL END --------------------------------------------------------------------------------

// HEXADECIMAL START ------------------------------------------------------------------------
// Hexadecimal to Binary
describe.each([
  ["", ""],
  ["55", "1010101"],
  ["876ABFF61", "100001110110101010111111111101100001"],
  ["10s&01$cd1", "Please enter a hexadecimal digit."],
])("Convert Hexadecimal to Binary", (input, expected) => {
  test(`should return '${expected}'`, () => {
    expect(testConverter("Hexadecimal", "Binary", input)).toBe(expected);
  });
});

// Hexadecimal to Text
describe.each([
  ["", ""],
  ["55", "U"],
  ["4B 41 4D 55", "KAMU"],
  ["87 6ABFF61", "Please enter an ASCII hexadecimal number."],
  ["10s&01$cd1", "Please enter a hexadecimal digit."],
])("Convert Hexadecimal to Text", (input, expected) => {
  test(`should return '${expected}'`, () => {
    expect(testConverter("Hexadecimal", "Text", input)).toBe(expected);
  });
});

// Hexadecimal to Decimal
describe.each([
  ["", ""],
  ["55", "85"],
  ["876ABFF61", "36350721889"],
  ["10s&01$cd1", "Please enter a hexadecimal digit."],
])("Convert Hexadecimal to Decimal", (input, expected) => {
  test(`should return '${expected}'`, () => {
    expect(testConverter("Hexadecimal", "Decimal", input)).toBe(expected);
  });
});

// Hexadecimal to Octal
describe.each([
  ["", ""],
  ["55", "125"],
  ["876ABFF61", "416652777541"],
  ["10s&01$cd1", "Please enter a hexadecimal digit."],
])("Convert Hexadecimal to Octal", (input, expected) => {
  test(`should return '${expected}'`, () => {
    expect(testConverter("Hexadecimal", "Octal", input)).toBe(expected);
  });
});
// HEXADECIMAL END --------------------------------------------------------------------------
