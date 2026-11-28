class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = Array(temperatures.length).fill(0);
        const stack = [];

        for (let i = 0; i < temperatures.length; i++) {
            const t = temperatures[i]

            while (stack.length && t > stack[stack.length - 1][0]) {
                let [stackT, stackInd] = stack.pop();
                res[stackInd] = i - stackInd
            }
            stack.push([t, i])
        }
        return res
    }
}
