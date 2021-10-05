import { Comments, Helpers } from "../utils/index.js";

export default class Perl {

  static getRandomVariableType() {
    const options = ["scalar", "array", "hash"];

    return Helpers.getRandomEntry(options);
  }

  static getRandomVariableValues(varType = Perl.getRandomVariableType()) {
    const options = {
      scalar: ["0", "1", `${Helpers.getRandomInt(-999999999, 99999999999)}`, `"${Helpers.getRandomNoun()}"`],
      array: ["()", `(${Helpers.getRandomInt(-999999999, 99999999999)})`, `("${Helpers.getRandomNoun()}")`],
      hash: ["()", `(${Helpers.getRandomNoun()} => "${Helpers.getRandomNoun()}",${Helpers.getRandomNoun()} => "${Helpers.getRandomNoun()}")`]
    };

    return Helpers.getRandomEntry(options[varType]);
  }

  static getRandomVariable(varType = Perl.getRandomVariableType()) {
    const keyWords = {
      scalar: "$",
      array: "@",
      hash: "%"
    };

    return `${keyWords[varType]}${Helpers.getRandomNoun()}`;
  }

  static getRandomVariableDeclaration() {
    const varType = Perl.getRandomVariableType();

    return `${Perl.getRandomAccessModifier()}${Perl.getRandomVariable(varType)} = ${Perl.getRandomVariableValues(varType)};`;
  }

  static getRandomSubroutineName() {
    return `${Helpers.getRandomVerb()}${Helpers.getRandomNounCapitalized()}`;
  }

  static getRandomAccessModifier() {
    const options = ["my ", ""];

    return Helpers.getRandomEntry(options);
  }

  static getRandomSubroutineCall() {
    return `${Perl.getRandomSubroutineName()}();`;
  }

  static getRandomLoopCommand() {
    const options = ["if", "unless", "while"];

    return Helpers.getRandomEntry(options);
  }

  static getRandomOneLineConditional() {
    return `${Perl.getRandomLoopCommand()} ${Perl.getRandomVariable("scalar")}`;
  }

  static getRandomFillerLine() {
    const options = [
      `print ${Helpers.getRandomLogLine()} ${Perl.getRandomOneLineConditional()};`,
      `print ${Perl.getRandomVariable()};`,
      Perl.getRandomVariableDeclaration(),
      Perl.getRandomSubroutineCall(),
    ];

    return Helpers.getRandomEntry(options);
  }

  static generateRandomCode(lines, addComment) {
    let fillerLines = [];
    const firstLine = `sub ${Perl.getRandomSubroutineName()} { ${Helpers.addNewLine()}`;

    let fillerLineQty = parseInt(lines, 10) - 3;

    if (addComment) {
      fillerLineQty = fillerLineQty - 1;
      fillerLines.push(Comments.getRandomComment("perl"));
    }

    for (let i = 1; i <= fillerLineQty; i++) {
      fillerLines.push(`    ${Perl.getRandomFillerLine()}`);
    }

    const lastLine = `${Helpers.addNewLine()}}`;

    return firstLine + fillerLines.join(Helpers.addNewLine()) + lastLine;
  }
}
