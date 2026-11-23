class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums || nums.length == 0) return 0

        const NumSet = new Set(nums);
        let max = 1;

        for (let num of nums) {
            let streak = 1;

            while (NumSet.has(num + streak)) {
                if (NumSet.has(num - 1)) break;
                streak++
                max = Math.max(streak, max)
            }
        }

        return max;
    }

}