import ConverterFn from "./converterFn";

export default class Converter extends ConverterFn {
  constructor(
    input,
    defaultOpt = { inputTarget: "Text", outputTarget: "Binary" }
  ) {
    super(input);
    this._input = input;
    this._inputTarget = defaultOpt.inputTarget;
    this._outputTarget = defaultOpt.outputTarget;
  }

  /** @param {String} value */
  set newInput(value) {
    this.input = value;
  }

  /** @param {String} value */
  set selectedLeftItem(value) {
    this._inputTarget = value;
  }

  /** @param {String} value */
  set selectedRightItem(value) {
    this._outputTarget = value;
  }

  get selectedLeftItem() {
    return this._inputTarget;
  }

  get selectedRightItem() {
    return this._outputTarget;
  }

  get output() {
    switch (this._inputTarget) {
      case "Text":
        if (this._outputTarget === "Binary") return this.strToBinary();
        if (this._outputTarget === "Decimal") return this.strToDecimal();
        if (this._outputTarget === "Octal") return this.strToOctal();
        return this.strToHex();
      case "Decimal":
        if (this._outputTarget === "Binary") return this.decToBin();
        if (this._outputTarget === "Text") return this.decToStr();
        if (this._outputTarget === "Octal") return this.decToOct();
        return this.decToHex();
      case "Binary":
        if (this._outputTarget === "Decimal") return this.binToDec();
        if (this._outputTarget === "Text") return this.binToStr();
        if (this._outputTarget === "Octal") return this.binToOct();
        return this.binToHex();
      case "Octal":
        if (this._outputTarget === "Decimal") return this.octToDec();
        if (this._outputTarget === "Text") return this.octToStr();
        if (this._outputTarget === "Binary") return this.octToBin();
        return this.octToHex();
      case "Hexadecimal":
        if (this._outputTarget === "Decimal") return this.hexToDec();
        if (this._outputTarget === "Text") return this.hexToStr();
        if (this._outputTarget === "Binary") return this.hexToBin();
        return this.hexToOct();
      default:
        return this._input;
    }
  }
}
