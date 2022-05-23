var myAtoi = function(string) {
    const INT_MIN = -Math.pow(2, 31);
    const INT_MAX = Math.pow(2,31) - 1;

    let sign = 1; 
    let result = 0;
    let i = 0;
        
    // Skip all spaces
    while (i < string.length && string[i] == ' ') { 
        i++;
    }

    // sign = +1, if it's positive number, otherwise sign = -1. 
    if (i < string.length && string[i] == '+') {
        sign = 1;
        i++;
    }
	else if (i < string.length && string[i] == '-') {
        sign = -1;
        i++;
    }

    // Traverse next digits of string and stop if it is not a digit. 
    // End of string is also non-digit character.
    while (i < string.length && string[i] >= '0' && string[i] <= '9') {
        let digit = string[i] - '0';

        // Check overflow and underflow conditions. 
        if (
			(result > Math.floor(INT_MAX / 10)) ||
			(result == Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)
		) {     
            // If integer overflowed return 2^31-1, otherwise if underflowed return -2^31.    
            return sign == 1 ? INT_MAX : INT_MIN;
        }

        // Append current digit to the result.
        result = 10 * result + digit;
        i++;
    }

    // We have formed a valid number without any overflow/underflow.
    // Return it after multiplying it with its sign.
    return sign * result;
};