function lengthOfLongestSubstring(s: string): number {

    let seen = new Set<string>
    let result = 0;
    let left = 0

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        while (seen.has(char)) {
            seen.delete(s[left]);
            left++;
        }
        
        seen.add(char);

        result = seen.size;
    }

    return result;

};