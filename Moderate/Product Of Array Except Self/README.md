# Products of Array Except Self

**Difficulty:** Medium  
**Topic:** Arrays  
**Concepts:** Prefix Product, Suffix Product, Two-Pass Traversal

## Problem

Given an integer array `nums`, return an array `output` where each element contains the product of all elements in the original array except the element at the current index.

**Requirements:**
- Solve in O(n) time complexity.
- Do not use division.
- Use the output array to store the results.

## Example

**Input:**
```typescript
nums = [1, 2, 4, 6]
```

**Output:**
```typescript
[48, 24, 12, 8]
```

## Approach: Prefix and Suffix Products

The idea is to separate the multiplication into two parts:

- **Left product:** Product of all elements before the current index.
- **Right product:** Product of all elements after the current index.

Multiply these two products to get the final answer for each position.

### 1. Initialize Variables

```typescript
const output: number[] = [];
let left = 1;
let right = 1;
```

- `output`: Stores the left products and eventually the final answers.
- `left`: Tracks the product of elements to the left.
- `right`: Tracks the product of elements to the right.

We initialize `left` and `right` to `1` because multiplying by `1` does not change the product. This also handles positions with no elements on one side.

### 2. First Loop: Calculate Left Products

Traverse the array from left to right.

```typescript
for (let i = 0; i < nums.length; i++) {
    output[i] = left;
    left = left * nums[i];
}
```

**Important:** Store the current `left` value BEFORE multiplying it by the current element.

Example:

```typescript
nums = [1, 2, 4, 6]
```

| Index | Current Element | Left Before Update | Left After Update |
|---|---:|---:|---:|
| 0 | 1 | 1 | 1 |
| 1 | 2 | 1 | 2 |
| 2 | 4 | 2 | 8 |
| 3 | 6 | 8 | 48 |

After the first loop:

```typescript
output = [1, 1, 2, 8]
```

These values represent the products of all elements to the left of each position.

### 3. Second Loop: Calculate Right Products

Now traverse the array from right to left.

```typescript
for (let i = nums.length - 1; i >= 0; i--) {
    output[i] = output[i] * right;
    right = right * nums[i];
}
```

**Important:** Start at `nums.length - 1` because array indexes start at `0`.

For an array with four elements, the indexes are `0, 1, 2, 3`.

We start at index `3` and move backward.

| Index | Current Element | Right Before Update | Output After Multiplication |
|---|---:|---:|---:|
| 3 | 6 | 1 | 8 |
| 2 | 4 | 6 | 12 |
| 1 | 2 | 24 | 24 |
| 0 | 1 | 48 | 48 |

After the second loop:

```typescript
output = [48, 24, 12, 8]
```

The existing left products are multiplied by their corresponding right products.

## Complete TypeScript Solution

```typescript
class Solution {
    productExceptSelf(nums: number[]): number[] {
        const output: number[] = [];
        let left = 1;
        let right = 1;

        // Calculate left products
        for (let i = 0; i < nums.length; i++) {
            output[i] = left;
            left = left * nums[i];
        }

        // Calculate right products
        for (let i = nums.length - 1; i >= 0; i--) {
            output[i] = output[i] * right;
            right = right * nums[i];
        }

        return output;
    }
}
```

## Important Concepts Learned

**1. Prefix Product**

The product of all elements before the current index.

**2. Suffix Product**

The product of all elements after the current index.

**3. Reverse Traversal**

Using `nums.length - 1` and `i--` allows us to traverse an array from right to left.

**4. Array Index Assignment**

Using `output[i]` allows us to store values at their corresponding indexes, even when traversing backward.

**5. Reusing an Array**

We don't need separate left and right arrays. We can store the left products first and update those same positions with the right products.

**6. Multiplicative Identity**

We initialize multiplication variables to `1` because multiplying any number by `1` leaves the number unchanged.

## Complexity Analysis

| Complexity | Explanation |
|---|---|
| Time: O(n) | We traverse the array twice. Each traversal takes O(n). |
| Auxiliary Space: O(1) | We only use two multiplication variables, excluding the required output array. |

## Key Takeaway

Instead of multiplying every element repeatedly or using division, we calculate the products on the left and right separately.

By using two passes through the array and reusing the output array, we achieve O(n) time complexity without division.

**What I learned:** Understanding how to accumulate products using variables, traverse arrays in both directions, and store intermediate results before updating them.