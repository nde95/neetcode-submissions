class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hasDupe = new Set();

        for (let num of nums) {
            if (hasDupe.has(num)) {
                return true
            } else {
                hasDupe.add(num)
            }
        }
        return false
    }
}
