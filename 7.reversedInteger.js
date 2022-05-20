/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
	let result = ''
	let flag = false

	if (x < 0) {
		x = x * -1
		flag = true
	}

	for (let i = x.toString().length - 1; i >= 0; i--) {
		//console.log('val', x.toString()[i]);

		result +=  x.toString()[i]
	}

	if (flag) result = '-' + result

	if (parseInt(result) > 2**31) {
		return 0
	}

	if (parseInt(result) < (2**31 * -1)) {
		return 0
	}

	return parseInt(result)
}

console.log(reverse(-123))
console.log(reverse(120))
