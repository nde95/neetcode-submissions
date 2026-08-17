class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const strMap = new Map()

        for (let str of strs) {
            let strKey = str.split('').sort().join('')

            if (strMap.has(strKey)) {
                strMap.get(strKey).push(str)
            } else if (!strMap.has(strKey)) {
                strMap.set(strKey, [str])
            }
        }
        return [...strMap.values()]
    }
}
