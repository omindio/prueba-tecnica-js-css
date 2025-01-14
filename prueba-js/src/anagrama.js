export default (word1, word2) => {
  const normalize = (word) => word.replace(/[\s,]+/g, "").toLowerCase();

  const sortedWord1 = normalize(word1).split("").sort().join("");
  const sortedWord2 = normalize(word2).split("").sort().join("");

  return sortedWord1 === sortedWord2;
};
