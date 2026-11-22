class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0
        let left = 0
        let right = heights.length - 1

        while (left < right) {
            let width = right - left
            let curr = Math.min(heights[left], heights[right]) * width

            if (curr > maxArea) {
                maxArea = curr
            }

            if (heights[left] <= heights[right]) {
                left++
            } else if (heights[left] > heights[right]) {
                right--
            }
            
            
        }
        return maxArea

    }
}
