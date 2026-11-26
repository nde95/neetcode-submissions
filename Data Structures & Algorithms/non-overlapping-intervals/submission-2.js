class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        let res = 0;
        intervals.sort((a,b) => a[0] - b[0])
        let prevEnd = intervals[0][1]

        for (let i = 1; i < intervals.length; i++) {
            let start = intervals[i][0];
            let end = intervals[i][1];

            if (start < prevEnd) {
                res++;
                prevEnd = Math.min(prevEnd, end)
            } else {
                prevEnd = end;
            }
        }

        return res;
    }
}
