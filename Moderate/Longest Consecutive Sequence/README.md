# Longest Consecutive Sequence

## Problem Description

Given an array of integers `nums`, return the length of the longest consecutive sequence of numbers.

The numbers in the sequence must be consecutive, but they do not need to appear next to each other in the original array.

**Example:**

```typescript
Input: nums = [2, 3, 4, 5, 10, 20]
Output: 4
```

**Explanation:**

The longest consecutive sequence is `[2, 3, 4, 5]`, which has a length of `4`.

## Solution (TypeScript)

```typescript
class Solution {
    longestConsecutive(nums: number[]): number {
        const variableOne = new Set(nums);
        let result = 0;

        for (const num of variableOne) {
            let current = num;
            let count = 1;

            if (!variableOne.has(num - 1)) {
                while (variableOne.has(current + 1)) {
                    current++;
                    count++;
                }

                result = Math.max(result, count);
            }
        }

        return result;
    }
}
```

## Approach

### 1. Convert the Array into a Set

```typescript
const variableOne = new Set(nums);
```

A `Set` stores unique values, automatically removing duplicates. It also allows efficient membership checks using `.has()`.

### 2. Initialize the Result

```typescript
let result = 0;
```

`result` stores the length of the longest consecutive sequence found so far.

We initialize it to `0` to handle an empty input array correctly.

### 3. Iterate Through the Set

```typescript
for (const num of variableOne) {
    let current = num;
    let count = 1;
}
```

- `num` represents the number currently being visited by the `for...of` loop.
- `current` tracks the number as we move through a consecutive sequence.
- `count` tracks the length of the current sequence, starting at `1` because the starting number is already counted.

### 4. Identify the Beginning of a Sequence

```typescript
if (!variableOne.has(num - 1)) {
```

This checks whether the previous consecutive number exists in the Set.

The `!` means we only proceed when the previous number does not exist.

For example, with `Set {2, 3, 4, 5}`:

- `2`: The number `1` does not exist, so start counting.
- `3`: The number `2` exists, so skip counting.
- `4`: The number `3` exists, so skip counting.
- `5`: The number `4` exists, so skip counting.

This prevents repeatedly counting the same sequence from different starting points.

### 5. Count Consecutive Numbers

```typescript
while (variableOne.has(current + 1)) {
    current++;
    count++;
}
```

The `while` loop checks whether the next consecutive number exists.

If it does:
- `current++` advances to the next number.
- `count++` increases the sequence length.

The loop stops when the next consecutive number is missing.

For example, starting at `2`:

| Current | Next Number Checked | Exists? | Count |
|---:|---:|---|---:|
| 2 | 3 | Yes | 2 |
| 3 | 4 | Yes | 3 |
| 4 | 5 | Yes | 4 |
| 5 | 6 | No | Stop |

The resulting sequence length is `4`.

### 6. Keep the Longest Sequence

```typescript
result = Math.max(result, count);
```

`Math.max()` compares the current longest length (`result`) with the length of the sequence just counted (`count`).

It returns the larger value, which is assigned back to `result`.

### 7. Return the Answer

```typescript
return result;
```

After processing the Set, return the length of the longest consecutive sequence.

## Key Concepts Learned

- **Set:** Stores unique values and supports membership checks with `.has()`.
- **`for...of`:** Iterates through the values of an iterable, such as an array or Set.
- **`if`:** Ensures counting begins only when the current number has no consecutive predecessor.
- **`while`:** Repeatedly checks for the next consecutive number.
- **`current`:** Tracks progress through the sequence.
- **`count`:** Tracks the length of the current sequence.
- **`Math.max()`:** Keeps the largest sequence length found so far.

## Complexity Analysis

- **Time Complexity: O(n) average** — Building the Set takes O(n) average time. The outer loop visits each unique number, and the sequence-counting loops only extend sequences from their starting numbers. Set membership checks take O(1) average time.
- **Space Complexity: O(n)** — The Set can store up to `n` unique numbers.

Here, `n` is the number of elements in the input array.

## Key Takeaway

Instead of sorting the array or repeatedly counting overlapping sequences, use a Set to find consecutive numbers efficiently.

**The most important optimization is checking `!variableOne.has(num - 1)` before counting.** This ensures each consecutive sequence is counted only from its starting number.