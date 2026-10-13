# Longest Substring Without Repeating Characters

## Problem Description

Given a string `s`, find the length of the longest substring that contains no repeating characters.

A substring is a contiguous sequence of characters within a string.

### Examples

**Example 1**

```text
Input: s = "abcabcbb"
Output: 3
Explanation: The longest substring is "abc",
which has a length of 3.
```

**Example 2**

```text
Input: s = "bbbbb"
Output: 1
Explanation: The longest substring is "b",
which has a length of 1.
```

**Example 3**

```text
Input: s = "pwwkew"
Output: 3
Explanation: The longest substring is "wke",
which has a length of 3.
```

## Solution

```typescript
function lengthOfLongestSubstring(s: string): number {
    let seen = new Set<string>();
    let result = 0;
    let left = 0;

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
}
```

## Concepts Learned

### 1. Set in TypeScript

A `Set` stores unique values and prevents duplicate entries.

```typescript
let seen = new Set<string>();
```

- `seen.add(char)` — adds a character to the Set.
- `seen.has(char)` — checks whether a character already exists.
- `seen.delete(char)` — removes a character from the Set.
- `seen.size` — returns the number of unique elements.

**Key takeaway:** A Set is useful when we need to track which characters are currently present without storing duplicates.

### 2. The Sliding Window Technique

The sliding window technique maintains a range of elements while moving through a string or array.

In this solution, we use two pointers:

- `left` — marks the beginning of the current substring.
- `i` — marks the position of the character currently being examined.

The Set stores the characters inside the current window.

When a duplicate is found, we move `left` forward and remove characters from the Set until the duplicate is no longer present.

### 3. The Difference Between `for` and `while`

The `for` loop moves through the string one character at a time.

```typescript
for (let i = 0; i < s.length; i++)
```

The `while` loop handles duplicate characters. It continues removing characters until the current character can be added without repeating an existing one.

```typescript
while (seen.has(char)) {
    seen.delete(s[left]);
    left++;
}
```

**Key takeaway:** A `while` loop is useful when we do not know exactly how many repetitions are needed to satisfy a condition.

### 4. Why We Need `left`

Consider this input:

```text
s = "abcabcbb"
```

After reading `"abc"`, the Set contains:

```text
{a, b, c}
```

The next character is `"a"`, which is already in the Set.

We remove characters starting from the left:

1. Remove `"a"` and move `left` forward.
2. The Set now contains `"b"` and `"c"`.
3. Add the new `"a"`.

The current substring is now `"bca"`.

This keeps the current window free of repeating characters.

### 5. Why We Use `seen.size`

```typescript
result = seen.size;
```

The Set's size tells us the number of unique characters in the current window.

Because the current window contains no repeating characters, its size equals the length of the current valid substring.

**Important improvement:** This line should use `Math.max()` to preserve the longest length found so far.

```typescript
result = Math.max(result, seen.size);
```

Without `Math.max()`, `result` only stores the size of the current window. A later, shorter window could overwrite a longer result.

## Corrected Solution

```typescript
function lengthOfLongestSubstring(s: string): number {
    let seen = new Set<string>();
    let result = 0;
    let left = 0;

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        while (seen.has(char)) {
            seen.delete(s[left]);
            left++;
        }

        seen.add(char);

        result = Math.max(result, seen.size);
    }

    return result;
}
```

## Time and Space Complexity

- **Time Complexity:** `O(n)` — each character enters the Set once and is removed at most once, where `n` is the length of the string.
- **Space Complexity:** `O(min(n, k))` — where `k` is the size of the character set. The Set only stores characters in the current window.

## Key Takeaways

- A `Set` helps track unique characters efficiently.
- The sliding window technique maintains a valid substring while moving through the input.
- Two pointers can represent the beginning and end of a window.
- A `while` loop removes duplicates until the current window becomes valid.
- `Math.max()` preserves the best result found instead of overwriting it with a smaller value.
- `seen.size` gives the length of the current substring because every character in the window is unique.

## What I Learned

This problem helped me understand how to use a Set to track unique characters and how two pointers work together in a sliding window. Instead of storing every possible substring, I can maintain a single valid window and update it as I traverse the string.

It also taught me to distinguish between the length of the current window and the longest length found so far. These are different values, and keeping track of the maximum is essential for getting the correct answer.