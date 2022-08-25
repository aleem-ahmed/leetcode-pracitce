/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
	for (let i = 0; i < (matrix.length + 1) / 2; i ++) {

		for (let ii = 0; ii < matrix.length / 2; ii++) {

			// Store temporary variable
			let temp = matrix[matrix.length - 1 - ii][i];

			// Square 1) replace value (Stored into temp) with next value
			matrix[matrix.length - 1 - ii][i] = matrix[matrix.length - 1 - i][matrix.length - 1 - ii];
			
			// Squre 2) 
			matrix[matrix.length - 1 - i][matrix.length - 1 - ii] = matrix[ii][matrix.length - 1 - i];
			
			// Square 3) 
			matrix[ii][matrix.length - 1 - i] = matrix[i][ii];
			
			// Square 4) Set current character to matrix
			matrix[i][ii] = temp;
		
		}

	}
    
    return matrix;
};

console.log(
	rotate([[5,1,9,11], [2,4,8,10], [13,3,6,7], [15,14,12,16]])
)