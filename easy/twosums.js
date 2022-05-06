var twoSum = function(nums, target) {
    let cache = {}
    
    // Cache the values
    for (let i = 0; i < nums.length; i++) {
        let c = target - nums[i]
        
		if (cache[c] !== undefined && cache[c] !== i) { return [i, cache[c]] }
     
		cache[nums[i]] = i
    }
        
    return null
}


console.log(twoSum([3,2,4], 6))