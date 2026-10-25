class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequency = new Map<number, number>;

        for (let i = 0; i < nums.length; i++) {
            const key = nums[i];

            if (!frequency.has(key)) {
                frequency.set(key,0);
            }

            frequency.set(key, (frequency.get(key) ?? 0) + 1);
        };

        //Converts Map into an Array
        const sorted = Array.from(frequency.entries());
        sorted.sort((a, b) => b[1] - a[1]);


        return sorted.slice(0, k).map(entry => entry[0]);
    }
}
