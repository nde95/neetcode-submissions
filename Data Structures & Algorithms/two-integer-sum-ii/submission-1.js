class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0;
        let j = numbers.length - 1

        while (i < j) {
            let diff = numbers[i] + numbers[j]

            if (diff < target) {
                i++
            } else if (diff > target) {
                j--
            }

            if (diff == target) {
                return [i+1, j+1]
            }
        }
    }
}
