class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        const res = [];
        res.push(intervals[0])

        for (let int of intervals) {
            const start = int[0]
            const end = int[1]
            const prev = res[res.length - 1]

            if (start <= prev[1]) {
                prev[1] = Math.max(prev[1], end)
            } else {
                res.push([start, end])
            }
        }
       
        
        return res;
    }
}
