class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0])
        const res = [];
        res.push(intervals[0])

        for (const int of intervals) {
            const start = int[0];
            const end = int[1];
            const prevEnd = res[res.length - 1][1]

            if (start <= prevEnd) {
                res[res.length - 1][1] = Math.max(end, prevEnd)
            } else {
                res.push([start, end])
            }
        }

        return res;
    }
}
