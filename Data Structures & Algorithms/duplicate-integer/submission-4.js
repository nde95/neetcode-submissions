class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const res = new Set(nums);

        if (res.size != nums.length) {
            return true;
        }

        return false
    }
}
