/*
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
 * 
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
 * 
 * Example 1:
 * 
 * Input: grid = [
 *   ["1","1","1","1","0"],
 *   ["1","1","0","1","0"],
 *   ["1","1","0","0","0"],
 *   ["0","0","0","0","0"]
 * ]
 * Output: 1
 * Example 2:
 * 
 * Input: grid = [
 *   ["1","1","0","0","0"],
 *   ["1","1","0","0","0"],
 *   ["0","0","1","0","0"],
 *   ["0","0","0","1","1"]
 * ]
 * Output: 3
 *  
 * 
 * Constraints:
 * 
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 300
 * grid[i][ii] is '0' or '1'.
*/

/**
 * @param {character[][]} grid
 * @return {number}
*/
let numIslands = (grid) => {
	let counter = 0;

	const dfs = (i, ii) => {
		if (
			i >= 0 &&
			i < grid.length &&
			ii >= 0 &&
			ii < grid[i].length &&
			grid[i][ii] === '1'
		) {
			grid[i][ii] = '0';
			dfs(i + 1, ii); // top
			dfs(i, ii + 1); // right
			dfs(i - 1, ii); // bottom
			dfs(i, ii - 1); // left
		}
	};

	for (let i = 0; i < grid.length; i += 1) {
		for (let ii = 0; ii < grid[i].length; ii += 1) {
			if (grid[i][ii] === '1') {
				counter++;
				dfs(i, ii);
			}
		}
	}

	return counter;
};