//Find the length of the longest substring within the given string
//To solve this issue, you will implement the sliding windows algorithm
function lengthOfLongestSubstring(s) {
    let windowCharsMap = {};
    let windowStart = 0;
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        const endChar = s[i];

        if (windowCharsMap[endChar] >= windowStart) {
            windowStart = windowCharsMap[endChar] + 1;
        }

        windowCharsMap[endChar] = i;
        maxLength = Math.max(maxLength, i - windowStart + 1);
    }

    return maxLength;
}

// Example usage
console.log(lengthOfLongestSubstring("abcabcbb")); // Outputs: 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb"));    // Outputs: 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew"));   // Outputs: 3 ("wke")
