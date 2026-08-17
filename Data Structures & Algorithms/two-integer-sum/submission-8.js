class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       let A = [];

       for (let i = 0; i < nums.length; i++) {
            A.push([nums[i], i])
       }

       A.sort((a, b) => a[0] - b[0])

       let i = 0;
       let j = A.length - 1;

       while (i < j) {
        let sum = A[i][0] + A[j][0]

        if (sum == target) {
            return [A[i][1], A[j][1]]
        }

        if (sum < target) {
            i++
        }

        if (sum > target) {
            j--
        }

       }



    }
}
