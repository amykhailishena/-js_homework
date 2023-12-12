function firstNonRepeatedCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    var c = string[i];
    if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
      return string.indexOf(c);
    }
  }
  return -1;
}

console.log(firstNonRepeatedCharacter("abba"));
console.log(firstNonRepeatedCharacter("abbc"));
console.log(firstNonRepeatedCharacter(" adda "));
console.log(firstNonRepeatedCharacter("qqq aaaqwewerrte"));