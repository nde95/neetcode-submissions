class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false
        }

        const sorted = s.split("").sort().join("")
        const tsorted = t.split("").sort().join("")

        return sorted == tsorted
    }
}
