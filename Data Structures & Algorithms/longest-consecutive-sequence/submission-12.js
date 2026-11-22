class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let NumSet = new Set(nums);
        let maxSeq = 0;

        for (let num of NumSet) {
            let streak = 1

            if (!NumSet.has(num - 1)) {
                while (NumSet.has(num + streak)) {
                    streak++
                }

                if (streak > maxSeq) {
                    maxSeq = streak
                }

                streak = 0
            }
        }

        return maxSeq
        
    }

}