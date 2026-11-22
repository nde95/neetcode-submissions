class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let nums1 = nums.sort();

        for (let i = 0; i < nums1.length; i++) {
            let j = i+1

            if (nums1[i] == nums1[j]) {
                return true
            }
        }

        return false

    }
}
