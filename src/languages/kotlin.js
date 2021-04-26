import { Helpers } from "../utils/index.js";

export default class Kotlin {
  static getRandomMethodSignature() {
    const randomNoun = Helpers.getRandomNounCapitalized();

    return `fun ${Helpers.getRandomVerb()}${randomNoun}(${this.getRandomTypes(3)
      .map((p) => `${this.getRandomVariableName(3)}: ${p.name()}`)
      .join(", ")})`;
  }

  static getRandomTypes(maxParamCount) {
    const paramCount = Helpers.getRandomInt(0, maxParamCount);
    const params = [];
    for (let p = 0; p < paramCount; p++) {
      const randomType = this.getRandomType();
      params.push(randomType);
    }
    return params;
  }

  static getRandomVariableDeclaration(indentLevel, memory) {
    const randomType = this.getRandomType();
    const typeName = randomType.name();
    let typeValue;
    if (Helpers.getRandomInt(0, 10) > 6) {
      typeValue = this.getRandomFunctionCall(0, 3);
    } else {
      typeValue = randomType.generator();
    }
    const varName = this.getRandomVariableName(3);
    if (memory) {
      memory.addVariable(varName, randomType);
    }
    return `${Kotlin.indent(indentLevel)}val ${varName}: ${typeName} = ${typeValue}`;
  }

  static getRandomVariableName(maxLength) {
    return this.getRandomLengthNounChain(maxLength);
  }

  static getRandomType() {
    const randomName = Helpers.capitalizeFirstChar(this.getRandomVariableName(2));
    const types = [
      {
        name: () => "String",
        generator: (_) => `${Helpers.getRandomLogLine()}`,
      },
      {
        name: () => "int",
        generator: (_) => Math.floor(Math.random() * 666),
      },
      {
        name: () => randomName,
        generator: (_) => `${randomName}()`,
      },
    ];
    return Helpers.getRandomEntry(types);
  }

  static getRandomFunctionCall(indentLevel, maxParamCount) {
    return `${Kotlin.indent(indentLevel)}${this.getRandomVariableName(3)}(${this.getRandomTypes(
      maxParamCount
    )
      .map((p) => p.generator())
      .join(", ")})`;
  }

  static getRandomLengthNounChain(maxNouns) {
    const fragmentCount = Math.floor(Math.random() * maxNouns);
    const fragments = [Helpers.getRandomNoun()];
    for (var i = 0; i < fragmentCount; i++) {
      fragments.push(Helpers.getRandomNounCapitalized());
    }
    return fragments.join("");
  }

  static getRandomLoop(indentLevel) {
    let indent = Kotlin.indent(indentLevel);
    const loopLines = [
      `${indent}for (${this.getRandomVariableName(1)} in ${this.getRandomFunctionCall(0, 0)}) {`,
    ];
    if (indentLevel === 0) {
      indentLevel += 4;
      indent = Kotlin.indent(indentLevel);
    }
    for (let index = 0; index < Helpers.getRandomInt(1, 3); index++) {
      loopLines.push(this.getRandomFillerLine(indentLevel + 2));
    }
    loopLines.push(`${indent}}`);
    return loopLines.join(Helpers.addNewLine());
  }

  static indent(level) {
    return "".padStart(level || 0, " ");
  }

  static getRandomFillerLine(indentLevel, memory) {
    const options = [
      () => `${Kotlin.indent(indentLevel)}println(${Helpers.getRandomLogLine()})`,
      () => Kotlin.getRandomVariableDeclaration(indentLevel, memory),
      () => Kotlin.getRandomFunctionCall(indentLevel, 3),
      () => Kotlin.getRandomLoop(indentLevel || 0),
    ];
    return Helpers.getRandomEntry(options)();
  }

  static generateRandomCode(lines) {
    const memory = new Memory();
    let methodSignatureReturn = "";
    let fillerLineQty = parseInt(lines, 10) - 2;
    let fillerLines = [];

    for (let i = 1; i <= fillerLineQty; i++) {
      fillerLines.push(`    ${Kotlin.getRandomFillerLine(0, memory)}`);
    }
    let returnLine = "";
    if (Helpers.getRandomInt(0, 5) > 2) {
      const randomVariable = memory.getRandomVariable();
      if (randomVariable !== null) {
        returnLine = `${Helpers.addNewLine()}    return ${randomVariable.name}`;
        methodSignatureReturn = `: ${randomVariable.varType.name()}`
      }
    }
    const firstLine = `${Kotlin.getRandomMethodSignature()}${methodSignatureReturn} {${Helpers.addNewLine()}`;
    const lastLine = `${returnLine}${Helpers.addNewLine()}}`;
    return firstLine + fillerLines.join(Helpers.addNewLine()) + lastLine;
  }
}

class Memory {

  constructor() {
    this.variables = [];
  }
  
  addVariable(name, varType) {
    this.variables.push({name: name, varType: varType});
  }

  getRandomVariable() {
    if (this.variables.length > 0) {
      return Helpers.getRandomEntry(this.variables);
    } else {
      return null;
    }
  }
}
