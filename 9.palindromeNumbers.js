function isPalindrome(x) {
	x = x.toString()

    let i = 0;
    let ii = x.length - 1;

    while (i < ii) {
    if(x.charAt(i) != x.charAt(ii)) return false;
      i++
      ii--
    }

    return true;
}

console.log(isPalindrome(1001))
console.log(isPalindrome(1004))