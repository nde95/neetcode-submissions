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

        let s1 = {}
        let t1 = {}

        for (let i = 0; i < s.length; i++) {
            s1[s[i]] = (s1[s[i]] || 0) + 1
            t1[t[i]] = (t1[t[i]] || 0) + 1
        }

        for (let key in s1) {
            if (s1[key] !== t1[key]) {
                return false
            }
        }
        return true

    }
}
