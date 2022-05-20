/*
    This important lesson with this problem is to try different arrangements of the
    letters and the numRows that are passed
*/
var convert = function (s, numRows) {
    // Base conditions
    if (s === null || numRows <= 0) { return "" }
    if (numRows === 1) { return s }
    
    // Resultant String
    let result = ""
    
    // Step size
    const step = numRows * 2 - 2

    // Loop for each row
    for (let r = 0; r < numRows; r++) {

        // Loop for each character in the row
        for (let c = r; c < s.length; c += step) {
            result += s[c]
            //console.log(c);

            // 
            if (
                r != 0 && // Not first row
                r != numRows - 1 && // Not Last Row
                c + step - 2 * r < s.length // Do not exceed string length
            ) {
                //console.log(c + step - 2 * r, "*");
                result += s[c + step - 2 * r]
            }
        }

        //console.log('--');
    }

    return result;
};

//console.log(convert('PAYPALISHIRINGPAYPALISHIRINGPAYPALISHIRING', 6))