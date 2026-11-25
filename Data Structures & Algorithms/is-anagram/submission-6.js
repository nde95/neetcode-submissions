class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) {
            return false
        }

        let count1 = {};
        let count2 = {};

        for (let i = 0; i < s.length; i++) {
            count1[s[i]] = (count1[s[i]] || 0) + 1;
            count2[t[i]] = (count2[t[i]] || 0) + 1; 
        }
        
        for (const [char,count] of Object.entries(count1)) {
            if (count2[char] !== count) {
                return false
            }
        }
        return true
    }
}
