class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let seen = new Set();
        let j = 0;
        let res = 0;

        for (let i = 0; i < s.length; i++) {
            while (seen.has(s[i])) {
                seen.delete(s[j]);
                j++;
            }
            seen.add(s[i])
            res = Math.max(res, i - j + 1)
        }
        return res
    }
}
