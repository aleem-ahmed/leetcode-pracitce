/**
 * @param {number[][]} tiles
 * @param {number} carpetLen
 * @return {number}
*/
var maximumWhiteTiles = function (tiles, carpetLen) {
    // [INIT]
    let max = 0
    let cnt = 0
    let ii = 0

    // Sort the array by number
    tiles = tiles.sort(function (a, b) { return a[0] - b[0] })
    
    // for every tile..
    for (let i = 0; i < tiles.length; i++) {
        // 
        console.log(
            "[", tiles[i][0], tiles[i][1], "]",
            "width", tiles[i][1] - tiles[i][0] + 1,
            "cnt", cnt + tiles[i][1] - tiles[i][0] + 1
        )

        // Add the width of each tile togeather..
        cnt = cnt + tiles[i][1] - tiles[i][0] + 1
        
        // For each tile
        let tileGrouplength = 0
        while (
            ii < tiles.length &&
            (tileGrouplength = tiles[i][1] - tiles[ii][0] + 1) > carpetLen
        ) {
            // keep removing tiles from left side
            max = Math.max(
                max,
                cnt - tileGrouplength + carpetLen
            )

            cnt -= tiles[ii][1] - tiles[ii][0] + 1

            ii++
        }

        max = Math.max(max, cnt)

        if (max == carpetLen) return carpetLen
    }

    return max
}

console.log(maximumWhiteTiles([[1,5],[10,11],[12,18],[20,25],[30,32]], 10))