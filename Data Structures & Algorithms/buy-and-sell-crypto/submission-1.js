class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let lowest = prices[0];
        let maxProfit = 0; 

        for (let i = 1; i < prices.length; i++) {
            let profit = prices[i] - lowest

            if (prices[i] < lowest) {
                lowest = prices[i]
            }

            maxProfit = Math.max(profit, maxProfit)
        }
        return maxProfit
    }
}
