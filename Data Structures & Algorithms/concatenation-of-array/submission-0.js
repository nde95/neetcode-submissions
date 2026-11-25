class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans = Array.from(nums)

        for (let i = 0; i < nums.length; i++) {
            ans.push(nums[i])
        }
        return ans
    }
}
