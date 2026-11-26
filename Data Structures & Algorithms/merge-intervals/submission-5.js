class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        const res = [];
        intervals.sort((a,b) => a[0] - b[0]);
        res.push(intervals[0])

        for (const int of intervals) {
            const start = int[0];
            const end = int[1];
            let prev = res[res.length - 1]

            console.log(start)

            if (start <= prev[1]) {
                prev[1] = Math.max(prev[1], end)
            } else {
                res.push([start, end])
            }
        }

        return res
    }
}
