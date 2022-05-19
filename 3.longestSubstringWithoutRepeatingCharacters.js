/*
* @param {string} s
* @return {number}
*/
var lengthOfLongestSubstring = function(str) {
	let cache = {}
	let ii = 0
	let maxlength = 0

	// For each character in the string
	for (let i = 0; i < str.length; i++) {
		const char = str[i]

		// If the character does not exist in cache set it to true
		if (!cache[char]) { cache[char] = true }
		else {
			while (cache[char]) {
				const char2 = str[ii]

				// if the cache record exists
				if (cache[char2]) {
					delete cache[char2]
				}
				
				// [INCREMENT]
				ii++
			}
			
			cache[char] = true			
		}
		
		maxlength = Math.max(maxlength, i - ii + 1)
		//console.log(cache);
	}
	
	return maxlength
}

//console.log(lengthOfLongestSubstring('abcabcbb'))