/**
 * @param {number[][]} tiles
 * @param {number} carpetLen
 * @return {number}
*/
var maximumWhiteTiles = function (tileGroups, carpetLen) {
    // [INIT]
    let max = 0
    let currentMax = 0
    let ii = 0

    // Sort the array by range
    tileGroups = tileGroups.sort(function (a, b) { return a[0] - b[0] })
    
    // for every tile..
    for (let i = 0; i < tileGroups.length; i++) {
        // Add the width of each tile togeather..
        currentMax = currentMax + tileGroups[i][1] - tileGroups[i][0] + 1

        let tileGroupsLen = 0
        while (
            ii < tileGroups.length &&
            (tileGroupsLen = tileGroups[i][1] - tileGroups[ii][0] + 1) > carpetLen
        ) {
            // keep removing tileGroups from left side
            max = Math.max(
                max,
                currentMax - tileGroupsLen + carpetLen
            )
            
            currentMax -= tileGroups[ii][1] - tileGroups[ii][0] + 1
            
            ii++
        }
        
        // Replace max if new max is more
        max = Math.max(max, currentMax)
        
        if (max == carpetLen) return carpetLen
    }

    return max
}

var maximumWhiteTiles2 = function (tileGroups, carpetLen) {
    // Sort the array by range
    tileGroups = tileGroups.sort(function (a, b) { return a[0] - b[0] })

    let maxCount = 0
    
    // cycle through positions carpet can be placed
    for (let i = 0; i < tileGroups.length; i++) {  
        // For the next tiles and beyond within carpet length
        
        let ii = i
        let withinRangeTileGroups = []

        while (
            ii < tileGroups.length &&
            (tileGroups[ii][1] - tileGroups[i][0] + 1) < carpetLen
        ) {
            withinRangeTileGroups.push(tileGroups[ii])
            
            ii++
        }

        console.log(withinRangeTileGroups);
        
        let count = 0
        for (let iii = 0; iii < withinRangeTileGroups.length; iii++) {
           count = count + (withinRangeTileGroups[iii][1] - withinRangeTileGroups[iii][0]) + 1
        }

        maxCount = Math.max(maxCount, count)

        if (maxCount == carpetLen) return carpetLen
    }

    return maxCount
}

console.log(maximumWhiteTiles2([[1,5],[10,11],[12,18],[20,25],[30,32]], 10))
console.log(maximumWhiteTiles2([[10,11],[1,1]], 2))
console.log(maximumWhiteTiles2([[3745,3757],[3663,3681],[3593,3605],[3890,3903],[3529,3539],[3684,3686],[3023,3026],[2551,2569],[3776,3789],[3243,3256],[3477,3497],[2650,2654],[2264,2266],[2582,2599],[2846,2863],[2346,2364],[3839,3842],[3926,3935],[2995,3012],[3152,3167],[4133,4134],[4048,4058],[3719,3730],[2498,2510],[2277,2295],[4117,4128],[3043,3054],[3394,3402],[3921,3924],[3500,3514],[2789,2808],[3291,3294],[2873,2881],[2760,2760],[3349,3362],[2888,2899],[3802,3822],[3540,3542],[3128,3142],[2617,2632],[3979,3994],[2780,2781],[3213,3233],[3099,3113],[3646,3651],[3956,3963],[2674,2691],[3860,3873],[3363,3370],[2727,2737],[2453,2471],[4011,4031],[3566,3577],[2705,2707],[3560,3565],[3454,3456],[3655,3660],[4100,4103],[2382,2382],[4032,4033],[2518,2531],[2739,2749],[3067,3079],[4068,4074],[2297,2312],[2489,2490],[2954,2974],[2400,2418],[3271,3272],[3628,3632],[3372,3377],[2920,2940],[3315,3330],[3417,3435],[4146,4156],[2324,2340],[2426,2435],[2373,2376],[3621,3626],[2826,2832],[3937,3949],[3178,3195],[4081,4082],[4092,4098],[3688,3698]],1638))


