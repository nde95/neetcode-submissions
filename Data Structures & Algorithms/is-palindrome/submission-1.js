class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphaNumeric(c) {
        return (
            (c >= 'a' && c <= 'z') || 
            (c >= 'A' && c <= 'Z') ||
            (c >= '0' && c <= '9')
        )
    }

    isPalindrome(s) {
        let l = 0
        let r = s.length - 1

        while (l < r) {
            while (l < r && !this.isAlphaNumeric(s[l])) {
                l++;
            }
            while (r > l && !this.isAlphaNumeric(s[r])) {
                r--;
            }

            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }

            r--;
            l++

        }
        return true 
    }
}
