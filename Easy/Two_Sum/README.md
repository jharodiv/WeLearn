Two Sum
Description
The twoSum function finds two numbers in an array whose sum equals the given target. It returns the indices of those two numbers.
How It Works
1. Initialize an empty array called result to store the indices.
2. Use a nested for loop to compare pairs of numbers in the array.
3. The outer loop (i) selects the first number, while the inner loop (j) selects the second number, starting from i + 1 to avoid comparing the same element.
4. If the sum of nums[i] and nums[j] equals the target, their indices are added to the result array.
5. Return the result array containing the matching indices.
Example
const nums = [2, 7, 11, 15];
const target = 9;

twoSum(nums, target);
// Output: [0, 1]


Explanation: The numbers 2 and 7 add up to 9. Their indices are 0 and 1, respectively.
Complexity Analysis
- Time Complexity: O(n²) — The nested loops compare pairs of elements in the array.
- Space Complexity: O(1) auxiliary space — The function uses a constant amount of extra space, excluding the result array. The result itself uses O(1) space when storing the two indices.
Note: This implementation checks every possible pair and may add multiple pairs if more than one combination matches the target.