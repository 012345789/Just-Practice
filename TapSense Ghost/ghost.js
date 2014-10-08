// We will define "winning" as having at least one word of which you will not say the last letter. (if the word is being spelled, the opposing player will end up saying the last letter. in other words, the word has an even number of letters remaining on your turn)
// We will define "losing" in which all viable words are such that you will be saying the last letter. (odd number of letters remaining on your turn)
// There are ways to improve the algorithm by counting how many winning words vs how many losing words there are and then returning the next letter with the most winning words, but its efficiency would be worse

var giveNextLetter = function (words, lettersSoFar) {

	// words is an array or dictionary that contains all the words that fit the letters given so far
	// lettersSoFar is a string of all the letters given so far. eg: 'popco'

	var losingWords = [];
	var lettersLength = lettersSoFar.length;
	var currentWord;
	for (var i = 0; i < words.length; i++) {
		currentWord = words[i];

		if (currentWord.substring(0, lettersLength) === lettersSoFar) { // Checks to see that the current word begins with the letters given
			if (currentWord.substring(lettersLength, currentWord.length)%2 === 0) {
				return currentWord.substring(lettersLength, lettersLength + 1); // If there is a winning word, return its next letter
			} else { // The word has an odd number of letters remaining
				var currentWordLength = currentWord.length;
				if (losingWords[0] && currentWordLength > losingWords[0].length) {
					losingWords.unshift(currentWord); // Put an element in the front of the array
				} else {
					losingWords.push(currentWord); // If the current word's length is not the longest in the array, append it to the end. This way, the longest word so far will always be the first element in the losingWords array
				}
			}
		}

	}

	return losingWords[0].substring(lettersLength, lettersLength + 1); // If the above block has not returned any value (the next letter to a possible winning word), it will return the next letter to the longest losing word

}