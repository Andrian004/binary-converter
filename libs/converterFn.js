export default class ConverterFn {
  constructor(input) {
    this.input = input;
  }

  strToBinary() {
    return this.input
      .split("")
      .map((char) => char.charCodeAt(0).toString(2))
      .join(" ");
  }

  strToDecimal() {
    return this.input
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  }

  strToOctal() {
    return this.input
      .split("")
      .map((char) => char.charCodeAt(0).toString(8))
      .join(" ");
  }

  strToHex() {
    return this.input
      .split("")
      .map((char) => char.charCodeAt(0).toString(16).toUpperCase())
      .join(" ");
  }

  binToStr() {
    if (this.input.length === 0) return "";
    if (/[^01\s]/.test(this.input))
      return "Please enter an ASCII binary digit.";
    if (this.input.split(" ").find((bin) => bin.length > 8))
      return "Please use ASCII binary format '01100001 01100010 ...'";

    return this.input
      .split(" ")
      .map((char) => String.fromCharCode(parseInt(char, 2)))
      .join("");
  }

  binToDec() {
    if (this.input.length === 0) return "";
    if (/[^01\s]/.test(this.input)) return "Please enter a binary digit.";
    return parseInt(this.input, 2).toString();
  }

  binToOct() {
    if (this.input.length === 0) return "";
    if (/[^01\s]/.test(this.input)) return "Please enter a binary digit.";
    return parseInt(this.input, 2).toString(8);
  }

  binToHex() {
    if (this.input.length === 0) return "";
    if (/[^01\s]/.test(this.input)) return "Please enter a binary digit.";
    return parseInt(this.input, 2).toString(16).toUpperCase();
  }

  decToStr() {
    if (this.input.length === 0) return "";
    if (/[^0-9\s]/.test(this.input)) return "Please enter a decimal digit.";
    if (this.input.split(" ").find((dec) => parseInt(dec) > 255))
      return "Please enter an ASCII decimal number.";

    return this.input
      .split(" ")
      .map((num) => String.fromCharCode(num))
      .join("");
  }

  decToBin() {
    if (this.input.length === 0) return "";
    if (/[^0-9\s]/.test(this.input)) return "Please enter a decimal digit.";
    return parseInt(this.input).toString(2);
  }

  decToOct() {
    if (this.input.length === 0) return "";
    if (/[^0-9\s]/.test(this.input)) return "Please enter a decimal digit.";
    return parseInt(this.input).toString(8);
  }

  decToHex() {
    if (this.input.length === 0) return "";
    if (/[^0-9\s]/.test(this.input)) return "Please enter a decimal digit.";
    return parseInt(this.input).toString(16).toUpperCase();
  }

  octToStr() {
    if (this.input.length === 0) return "";
    if (/[^0-7\s]/.test(this.input)) return "Please enter an octal digit.";
    if (this.input.split(" ").find((oct) => parseInt(oct, 8) > 255))
      return "Please enter an ASCII octal number.";

    return this.input
      .split(" ")
      .map((num) => String.fromCharCode(parseInt(num, 8)))
      .join("");
  }

  octToBin() {
    if (this.input.length === 0) return "";
    if (/[^0-7\s]/.test(this.input)) return "Please enter an octal digit.";
    return parseInt(this.input, 8).toString(2);
  }

  octToDec() {
    if (this.input.length === 0) return "";
    if (/[^0-7\s]/.test(this.input)) return "Please enter an octal digit.";
    return parseInt(this.input, 8).toString();
  }

  octToHex() {
    if (this.input.length === 0) return "";
    if (/[^0-7\s]/.test(this.input)) return "Please enter an octal digit.";
    return parseInt(this.input, 8).toString(16);
  }

  hexToBin() {
    if (this.input.length === 0) return "";
    if (/[^a-fA-F0-9\s]/.test(this.input))
      return "Please enter a hexadecimal digit.";

    return parseInt(this.input, 16).toString(2);
  }

  hexToStr() {
    if (this.input.length === 0) return "";
    if (/[^a-fA-F0-9\s]/.test(this.input))
      return "Please enter a hexadecimal digit.";
    if (this.input.split(" ").find((hex) => parseInt(hex, 16) > 255))
      return "Please enter an ASCII hexadecimal number.";

    return this.input
      .split(" ")
      .map((char) => String.fromCharCode(parseInt(char, 16)))
      .join("");
  }

  hexToDec() {
    if (this.input.length === 0) return "";
    if (/[^a-fA-F0-9\s]/.test(this.input))
      return "Please enter a hexadecimal digit.";

    return parseInt(this.input, 16).toString();
  }

  hexToOct() {
    if (this.input.length === 0) return "";
    if (/[^a-fA-F0-9\s]/.test(this.input))
      return "Please enter a hexadecimal digit.";

    return parseInt(this.input, 16).toString(8);
  }
}
