# Longest Palindromic Substring

## Problem Description

Given a string `s`, return the longest palindromic substring in `s`.

A **palindrome** is a string that reads the same forward and backward.

### Example

**Input:**
```typescript
s = "babad"
```

**Output:**
```typescript
"bab"
```

`"aba"` is also a valid answer because it has the same length.

## Approach: Expand Around Center

Instead of generating every possible substring and reversing it to check whether it is a palindrome, this solution uses the **expand-around-center** technique.

The idea is to start from a possible center and expand outward while the characters on both sides match.

There are two types of palindromes:

1. **Odd-length palindrome:** Has one center character, such as `"racecar"`.
2. **Even-length palindrome:** Has two center characters, such as `"abba"`.

The solution checks both types at every index and stores the longest palindrome found.

## How It Works

### 1. Initialize the longest palindrome

```typescript
let longest = "";
```

This variable stores the longest palindrome found so far.

### 2. Iterate through the string

```typescript
for (let i = 0; i < s.length; i++)
```

Each index is considered a possible center of a palindrome.

### 3. Check odd-length palindromes

```typescript
let left = i;
let right = i;
```

Both pointers start at the same index.

The `while` loop compares the characters and expands outward while they match.

```typescript
while (
    left >= 0 &&
    right < s.length &&
    s[left] === s[right]
) {
    left--;
    right++;
}
```

- `left >= 0` ensures the left pointer stays within the string.
- `right < s.length` ensures the right pointer stays within the string.
- `s[left] === s[right]` checks whether the characters match.
- `left--` moves left.
- `right++` moves right.

### 4. Extract the palindrome

```typescript
let palindrome = s.substring(left + 1, right);
```

After the loop stops, both pointers have moved one position beyond the matching palindrome.

Adding `1` to `left` returns to the palindrome's starting index. The `right` index is already at the correct exclusive endpoint for `substring()`.

### 5. Check even-length palindromes

```typescript
left = i + 1;
right = i;
```

This checks for a palindrome centered between two adjacent characters.

The same expansion logic is used to find even-length palindromes.

### 6. Update the longest palindrome

```typescript
if (palindrome.length > longest.length) {
    longest = palindrome;
}
```

If the newly found palindrome is longer than the current result, update `longest`.

The function returns `longest` after checking every possible center.

## Time and Space Complexity

- **Time Complexity:** O(n²) — there are `n` possible centers, and expanding around each center can take up to O(n) time.
- **Space Complexity:** O(n) — the implementation creates substring and reversed-string values, which can require O(n) additional space.

## Key Concepts Learned

- **Palindromes:** Strings that read the same forward and backward.
- **Two pointers:** Using `left` and `right` to compare characters from opposite sides.
- **Expand around center:** Finding palindromes by starting at the center and moving outward.
- **Odd vs. even centers:** Understanding why `"racecar"` and `"abba"` require different starting positions.
- **String indexing:** Understanding that `substring(start, end)` excludes the ending index.
- **Loop conditions:** Using `&&` to ensure the indexes are valid and the characters match.
- **Tracking the maximum:** Comparing lengths and updating a variable only when a longer result is found.

## What I Learned

I learned that I don't always need to generate every possible substring to solve a string problem. By recognizing that palindromes have a center, I can expand outward and find them more efficiently.

I also learned why pointer positions matter: after the expansion loop stops, the pointers are one position beyond the palindrome, so the substring boundaries must be adjusted correctly.