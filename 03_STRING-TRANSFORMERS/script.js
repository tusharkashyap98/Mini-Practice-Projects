const input = document.querySelector("input");
const upperCaseOutput = document.querySelector("#upper-case span");
const lowerCaseOutput = document.querySelector("#lower-case span");
const camelCaseOutput = document.querySelector("#camel-case span");
const pascalCaseOutput = document.querySelector("#pascal-case span");
const snakeCaseOutput = document.querySelector("#snake-case span");
const kebabCaseOutput = document.querySelector("#kebab-case span");
const trimCaseOutput = document.querySelector("#trim-case span");

function capitalizeString(str) {
  // const firstCharacter =  str[0].toUpperCase()
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1, str.length);
}

function camelCase(str) {
  const lowerCaseString = str.toLowerCase();
  const wordsArray = lowerCaseString.split(" ");
  const finlaArray = wordsArray.map((word, i) => {
    if (i === 0) return word;
    return capitalizeString(word);
  });
  return finlaArray.join("");
}

function pascalCase(str) {
  const lowerCaseString = str.toLowerCase();
  const wordsArray = lowerCaseString.split(" ");
  const finlaArray = wordsArray.map((word, i) => {
    return capitalizeString(word);
  });
  return finlaArray.join("");
}

function snakeCase(str) {
  return str.replaceAll(" ", "_");
}

function kebabCase(str) {
  return str.replaceAll(" ", "-");
}

function trimCase(str) {
  return str.replaceAll(" ", "");
}

function updateScreen() {
  lowerCaseOutput.innerText = input.value.trim().toLocaleLowerCase();
  upperCaseOutput.innerText = input.value.trim().toUpperCase();
  camelCaseOutput.innerText = camelCase(input.value.trim());
  pascalCaseOutput.innerText = pascalCase(input.value.trim());
  snakeCaseOutput.innerText = snakeCase(input.value.trim());
  kebabCaseOutput.innerText = kebabCase(input.value.trim());
  trimCaseOutput.innerText = trimCase(input.value.trim());
}

updateScreen();

// input.addEventListener("input",(e)=>{
// // console.log(e.target.value);
// updateScreen();
// })

input.addEventListener("input", () => {
  updateScreen();
});
