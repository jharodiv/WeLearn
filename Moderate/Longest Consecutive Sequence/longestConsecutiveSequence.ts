class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const variableOne = new Set(nums);
        let result = 0;

        for (const num of variableOne) {

            let current = num;
            let count = 1;

            if(!variableOne.has(num - 1)) {
                // Checking if the value is inside
                while (variableOne.has(current + 1)) {
                    current++
                    count++
                }

                result = Math.max(result, count);
            }
        }

        return result;
    }
}
