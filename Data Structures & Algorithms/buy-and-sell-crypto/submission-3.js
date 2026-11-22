class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let lowest = 999;
        let maxProfit = 0;

        for (let i = 0; i < prices.length; i++) {
            let profit = prices[i] - lowest

            lowest = Math.min(lowest, prices[i])
            maxProfit = Math.max(maxProfit, profit)

        }
        return maxProfit
    }
}
