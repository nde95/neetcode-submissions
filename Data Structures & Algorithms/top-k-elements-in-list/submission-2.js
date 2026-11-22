class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};

        for (let num of nums) {
            count[num] = (count[num] || 0) + 1
        }

        const keys = Object.keys(count)

        keys.sort((a, b) => count[b] - count[a])

        return keys.slice(0, k)
    }
}
