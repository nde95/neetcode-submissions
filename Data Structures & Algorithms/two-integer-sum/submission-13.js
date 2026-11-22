class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const NumsMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i]

            if (NumsMap.has(diff)) {
                return [i, NumsMap.get(diff)]
            } else {
                NumsMap.set(nums[i], i)
            }
        }


}
}
