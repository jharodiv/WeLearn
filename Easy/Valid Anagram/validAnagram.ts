class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const count = new Map<string, number> 

        if (s.length !== t.length) {
            return false;
        }
        for (let i = 0; i < s.length; i++) {
            count.set(s[i],(count.get(s[i]) ?? 0) + 1);
        };
        for (let i = 0; i < t.length; i++) {
            if ((count.get(t[i]) ?? 0) === 0){
                return false
            }
            count.set(t[i],(count.get(t[i]) ?? 0) - 1);
        };

        return true;

    }
}
