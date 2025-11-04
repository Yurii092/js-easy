function replaceVowels(str) {
  const vowels = "aeiouyAEIOUY";
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (vowels.includes(char)) {
      result += "*";
    } else {
      result += char;
    }
  }

  return result;
}

console.log(replaceVowels("hello world"));
console.log(replaceVowels("Javascript"));

module.exports = replaceVowels;
