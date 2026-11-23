class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
    
        const NumSet = new Set(nums);
        let max = 0;

        for (let num of NumSet) {
            let streak = 0;

            if (!NumSet.has(num - 1)) {
                while (NumSet.has(num + streak)) {
                    streak++
                }
            }
            max = Math.max(max, streak)
        }

        return max;
    }

}