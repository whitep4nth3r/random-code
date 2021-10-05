import * as LANGUAGES from "./languages/index.js";
import * as Constants from "./constants/index.js";
import { Helpers } from "./utils/index.js";

export function getLanguages() {
  return Constants.Languages;
}

export function generateRandomCode(lang, n) {
  let language;
  let lines;
  let code;

  language = !lang ? Helpers.getRandomLang() : lang;
  lines = !n ? Helpers.getRandomInt(3, 20) : n;

  const addComment = (Math.random() + 0.5) >> 0;
  // 3 lines will be dedicated to a for loop if lines > 7
  let includeForLoop = parseInt(lines, 10) > 7;

  switch (language) {
    case "cobol":
      code = LANGUAGES.COBOL.generateRandomCode(lines);
      break;
    case "cplusplus":
      code = LANGUAGES.CPlusPlus.generateRandomCode(lines);
      break;
    case "csharp":
      code = LANGUAGES.CSharp.generateRandomCode(lines, addComment);
      break;
    case "css":
      code = LANGUAGES.Css.generateRandomCode(lines, addComment);
      break;
    case "docker":
      code = LANGUAGES.Docker.generateRandomCode(lines);
      break;
    case "fsharp":
      code = LANGUAGES.FSharp.generateRandomCode(lines);
      break;
    case "go":
      code = LANGUAGES.Go.generateRandomCode(lines);
      break;
    case "java":
      code = LANGUAGES.Java.generateRandomCode(lines, addComment);
      break;
    case "js":
      code = LANGUAGES.JavaScript.generateRandomCode(lines, addComment, includeForLoop);
      break;
    case "kotlin":
      code = LANGUAGES.Kotlin.generateRandomCode(lines);
      break;
    case "perl":
      code = LANGUAGES.Perl.generateRandomCode(lines, addComment);
      break;
    case "php":
      code = LANGUAGES.PHP.generateRandomCode(lines, addComment);
      break;
    case "powershell":
      code = LANGUAGES.Powershell.generateRandomCode(lines, addComment);
      break;
    case "python":
      code = LANGUAGES.Python.generateRandomCode(lines, addComment);
      break;
    case "rust":
      code = LANGUAGES.Rust.generateRandomCode(lines);
      break;
    case "sql":
      code = LANGUAGES.SQL.generateRandomCode(lines);
      break;
    case "swift":
      code = LANGUAGES.Swift.generateRandomCode(lines);
      break;
    case "ts":
      code = LANGUAGES.TypeScript.generateRandomCode(lines, addComment, includeForLoop);
      break;
    case "vba":
      code = LANGUAGES.VBA.generateRandomCode(lines, addComment);
      break;
    default:
      code = "lol";
  }

  return {
    code,
    lines,
    languageKey: language,
    languageValue: Constants.Languages[language],
    contributors: Helpers.getContributors(language),
  };
}
