# Number Converter

In this documentation, I want to show you how to use the Converter instance.

## Preview

```javascript
const converter = new Converter();

// with default input
const defaultInput = new Converter("default Input");

// with options
const withOptions = new Converter("default Input", {
  inputTarget: "Text",
  outputTarget: "Binary",
});
```

Here is a list of options

| Options         | Description                                                                                                                   |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **inputTarget** | Type of your input value. Default is `'Text'` but you can set to (`'Text', 'Binary', 'Decimal', 'Octal', 'Hexadecimal'`).     |
| **ouputTarget** | Type of your output target. Default is `'Binary'` but you can set to (`'Text', 'Binary', 'Decimal', 'Octal', 'Hexadecimal'`). |

## Example of usage

```javascript
const converter = new Converter();

// set input/output target
converter.selectedLeftItem = "Decimal"; // input
converter.selectedRightItem = "Binary"; // output

// set new input value
converter.newInput = "10";

// get the output value
console.log("output: ", converter.output); // => "1010"

// get input/output target
console.log("input Target: ", converter.selectedLeftItem); // => "Decimal"
console.log("output Target: ", converter.selectedRightItem); // => "Binary"
```
