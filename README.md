# random-code

## Contributions

If you'd like to contribute to this project,
[check out this blog post](https://whitep4nth3r.com/blog/how-to-build-test-and-release-node-module-es6)
to understand how to build and test the code locally.

---

Need some code for your project? We've got you covered. Choose your language. Choose how much code.
BÄM! You got code.

## Install package

```bash
npm install @whitep4nth3r/random-code
```

## Get random code

There are two functions available for you to use:

```javascript
import { getLanguages, generateRandomCode } from "@whitep4nth3r/random-code";
```

Use `getLanguages()` to return an Object with key/value pairs of available languages.

Use `generateRandomCode()` to generate some random code with two optional parameters.

- language (a key from `getLanguages()`)
- lines (an integer of how many lines of code you require)

If you do not provide these parameters, your result will be random.

Here's an example request:

```javascript
const myRandomCode = generateRandomCode("js", 3);
```

Here's an example response:

```json
{
  "code": "const replaceObject = () => {\n    /* FIXME: For some reason this is causing the code below to error out? */\n    const property = true;\n    return 0;\n}",
  "lines": "3",
  "languageKey": "js",
  "languageValue": "JavaScript",
  "contributors": ["whitep4nth3r", "lukeocodes", "negue", "isabellabrookes"]
}
```

## Profit

And lol.
