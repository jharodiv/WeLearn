# Palindrome Number

## Description

The `isPalindrome` function determines whether an integer is a palindrome. A palindrome number reads the same forward and backward.

The solution reverses the digits of the given number and compares the reversed number with the original number.

## How It Works

1. **Store the original number:** Assign `x` to `original` so that the original value remains available for comparison.
2. **Initialize the reversed number:** Set `reversed` to `0`.
3. **Extract the last digit:** Use the modulo operator (`% 10`) to get the last digit of `x`.
4. **Build the reversed number:** Multiply `reversed` by `10` and add the extracted digit.
5. **Remove the last digit:** Use `Math.floor(x / 10)` to remove the last digit from `x`.
6. **Repeat the process:** Continue until `x` is no longer greater than `0`.
7. **Compare the numbers:** Return `true` if `reversed` equals `original`; otherwise, return `false`.

## Example

**Input:**
```typescript
x = 121
```

**Output:**
```typescript
true
```

**Explanation:**

The function reverses the digits of `121`:

- Extract `1` → `reversed = 1`
- Extract `2` → `reversed = 12`
- Extract `1` → `reversed = 121`

Since the reversed number (`121`) equals the original number (`121`), the function returns `true`.

Another example:

**Input:** `123`

**Output:** `false`

The reversed number is `321`, which does not equal the original number (`123`).

## Complexity Analysis

- **Time Complexity:** `O(log₁₀ n)` — The loop processes one digit per iteration. For a number with `d` digits, the loop runs `d` times.
- **Space Complexity:** `O(1)` — The function uses a constant amount of additional space regardless of the number of digits.

## Key Concepts

- **Modulo (`%`):** Extracts the last digit of a number.
- **Multiplication by 10:** Shifts the digits of the reversed number one position to the left.
- **`Math.floor()`:** Removes the last digit by dividing the number by `10` and rounding down.
- **Comparison (`===`):** Checks whether the reversed number matches the original number.

## Note

This implementation returns `true` for `0` because its reversed value remains `0`. Negative numbers return `false` because the loop only runs while `x > 0`.