/*
* @param {string} s
* @return {number}
*/
var lengthOfLongestSubstring = function(s) {
	let cache = {}
	let i = 0
	let ii = 0
	let maxlength = 0

	while (i < s.length) {
		// If the value does not exist in the cache set it to 1
		if (cache[s[i]] === undefined) { cache[s[i]] = true }
		else if (cache[s[i]]) {
			// While the cache of this is defined
			while (cache[s[i]] != undefined) {
				// if the cache record is 1
				if (cache[s[ii]]) {
					delete cache[s[ii]]
				}
				else {
					cache[s[ii]]--
				}
				
				// [INCREMENT]
				ii++
			}
			
			cache[s[i]] = true
		}

		maxlength = Math.max(maxlength , i - ii + 1)

		// [INCREMENT]
		i++
		
		console.log(cache);
	}

	return maxlength
}

console.log(lengthOfLongestSubstring('abcabcbb'));