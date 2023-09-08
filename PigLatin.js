/**
 * Write function that translates a text to Pig Latin and back.
 *  English is translated to Pig Latin by taking the first letter of every word,
 *  moving it to the end of the word and adding ‘ay’.
 *  “The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.
 */

// Function to translate English to Pig Latin
function englishToPigLatin(text) {
    //Splits the text by spaces if there are any and sets it to a variable
    const words = text.split(' ');
    
    const pigLatinWords = words.map(word => {
        const firstLetter = word[0];
        const restOfWord = word.slice(1);
        return `${firstLetter.toUpperCase()}${restOfWord.toLowerCase()}${firstLetter.toLowerCase()}ay`;
    });
    return pigLatinWords.join(' ');
}

// Function to translate Pig Latin back to English
function pigLatinToEnglish(text) {
    const words = text.split(' ');
    const englishWords = words.map(word => {
        const lastTwoLetters = word.slice(-2);
        const restOfWord = word.slice(0, -2);
        const firstLetter = lastTwoLetters[0].toUpperCase();
        const restOfLastTwoLetters = lastTwoLetters.slice(1).toLowerCase();
        return `${firstLetter}${restOfWord}${restOfLastTwoLetters}`;
    });
    return englishWords.join(' ');
}

// Example usage:
const englishText = "The quick brown fox";
const pigLatinText = englishToPigLatin(englishText);
console.log(pigLatinText); // Output: "Hetay uickqay rownbay oxfay"
const translatedBack = pigLatinToEnglish(pigLatinText);
console.log(translatedBack); // Output: "The quick brown fox"
