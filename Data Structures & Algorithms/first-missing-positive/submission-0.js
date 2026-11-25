class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        let missing = 1; 

        while (nums.includes(missing)) {
            missing++
        }

        return missing;
    }
}
