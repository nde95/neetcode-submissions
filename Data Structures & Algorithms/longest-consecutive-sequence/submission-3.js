class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let nums1 = nums.sort((a, b) => a -  b)
        // console.log(nums1)
        let counter = 1
        let streak = 0

        if (nums.length == 1) {
            return 1
        } else if (nums.length == 0) {
            return 0
        }

        for (let i = 1; i < nums1.length; i++) {
            // console.log(nums1[i], "curr")
            // console.log(nums1[i - 1], "last")

            if (nums1[i] == nums1[i - 1] + 1) {
                counter++
            } else if (nums1[i] > nums1[i - 1] + 1) {
                counter = 1;
            }

            if (streak < counter) {
                streak = counter
            }
        }
        return streak;
    }
}
