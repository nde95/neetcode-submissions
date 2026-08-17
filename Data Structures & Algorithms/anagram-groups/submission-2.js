class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const strMap = new Map()

        for (let str of strs) {
            let strKey = str.split('').sort().join('')

            if (!strMap.has(strKey)) {
                strMap.set(strKey,[str])
            } else {
                strMap.get(strKey).push(str)
            }
        }

        return [...strMap.values()]

    }
}
