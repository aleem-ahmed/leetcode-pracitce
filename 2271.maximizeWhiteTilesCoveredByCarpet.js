/**
 * @param {number[][]} tiles
 * @param {number} carpetLen
 * @return {number}
*/
var maximumWhiteTiles = function (tiles, carpetLen) {
    tiles = tiles.sort(function (a, b) { return a[0] - b[0] })

    let max = 0
    let cnt = 0
    let l = 0
    
    for (let i = 0; i < tiles.length; i++) {
        const tile = tiles[i]

        cnt = cnt + tile[1] - tile[0] + 1
        
        let len = 0
        while (
            l < tiles.length &&
            (len = tiles[i][1] - tiles[l][0] + 1) > carpetLen
        ) {
            // keep removing tiles from left side
            max = Math.max(max, cnt - len + carpetLen)

            cnt -= tiles[l][1] - tiles[l][0] + 1

            l++
        }

        max = Math.max(max, cnt)

        if (max == carpetLen) return carpetLen
    }

    return max
}

console.log(maximumWhiteTiles([[1,5],[10,11],[12,18],[20,25],[30,32]], 10))