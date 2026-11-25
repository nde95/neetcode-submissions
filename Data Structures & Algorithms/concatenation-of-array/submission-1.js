class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans = Array.from(nums)

        ans.push(...nums)

        return ans
    }
}
