function reverseWords(sentence) {
    return sentence.split(" ").reverse().join(" ");
}
console.log(reverseWords("JavaScript is fun"));

function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

function countVowels(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}
console.log(countVowels("Hello World"));
