import * as LANGUAGES from "./languages/index.js";
import * as Constants from "./constants/index.js";
import { Helpers } from "./utils/index.js";

export function getLanguages() {
  return Constants.Languages;
}

export function generateRandomCode(lang, n) {
  let language;
  let lines;
  let randomCode;

  language = !lang ? Helpers.getRandomLang() : lang;
  lines = !n ? Helpers.getRandomInt(4, 12) : n;

  const addComment = (Math.random() + 0.5) >> 0;
  // 3 lines will be dedicated to a for loop if lines > 7
  let includeForLoop = parseInt(lines, 10) > 7;

  switch (language) {
    case "cobol":
      randomCode = LANGUAGES.COBOL.generateRandomCode(lines);
      break;
    case "cplusplus":
      randomCode = LANGUAGES.CPlusPlus.generateRandomCode(lines);
      break;
    case "csharp":
      randomCode = LANGUAGES.CSharp.generateRandomCode(lines, addComment);
      break;
    case "css":
      randomCode = LANGUAGES.Css.generateRandomCode(lines, addComment);
      break;
    case "docker":
      randomCode = LANGUAGES.Docker.generateRandomCode(lines);
      break;
    case "fsharp":
      randomCode = LANGUAGES.FSharp.generateRandomCode(lines);
      break;
    case "go":
      randomCode = LANGUAGES.Go.generateRandomCode(lines);
      break;
    case "java":
      randomCode = LANGUAGES.Java.generateRandomCode(lines, addComment);
      break;
    case "js":
      randomCode = LANGUAGES.JavaScript.generateRandomCode(lines, addComment, includeForLoop);
      break;
    case "kotlin":
      randomCode = LANGUAGES.Kotlin.generateRandomCode(lines);
      break;
    case "php":
      randomCode = LANGUAGES.PHP.generateRandomCode(lines, addComment);
      break;
    case "powershell":
      randomCode = LANGUAGES.Powershell.generateRandomCode(lines, addComment);
      break;
    case "python":
      randomCode = LANGUAGES.Python.generateRandomCode(lines, addComment);
      break;
    case "rust":
      randomCode = LANGUAGES.Rust.generateRandomCode(lines);
      break;
    case "sql":
      randomCode = LANGUAGES.SQL.generateRandomCode(lines);
      break;
    case "swift":
      randomCode = LANGUAGES.Swift.generateRandomCode(lines);
      break;
    case "ts":
      randomCode = LANGUAGES.TypeScript.generateRandomCode(lines, addComment, includeForLoop);
      break;
    case "vba":
      randomCode = LANGUAGES.VBA.generateRandomCode(lines, addComment);
      break;
    default:
      randomCode = "lol";
  }

  return {
    code: randomCode,
    language: Constants.Languages[language],
    contributors: Helpers.getContributors(language),
  };
}
