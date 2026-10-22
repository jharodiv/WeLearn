
# Valid Anagram

## Problem

Given two strings `s` and `t`, determine whether `t` is an anagram of `s`.

An anagram contains the **same characters with the same frequencies**, but the characters may appear in a different order.

Examples:
- `s = "anagram"`, `t = "nagaram"` → `true`
- `s = "rat"`, `t = "car"` → `false`

## Approach: Hash Map / Frequency Counting

Use a `Map<string, number>` to track how many times each character appears.

1. If `s` and `t` have different lengths, return `false` immediately.
2. Loop through `s` and count each character in the map.
3. Loop through `t`:
   - If the current character has a count of `0` or is not in the map, return `false`.
   - Otherwise, decrease that character's count by `1`.
4. If the second loop finishes without finding a mismatch, return `true`.

## What I Learned

- **`Map<string, number>`** stores each character as a key and its frequency as a value.
- **`Map.get()`** retrieves a character's current count.
- **`?? 0`** provides `0` when the map has no value for a character.
- **`Map.set()`** updates the count after each character is counted or matched.
- The first loop increments counts, while the second loop decrements them as characters are matched.
- A count of `0` means all occurrences of that character have already been used. Seeing it again means the strings are not anagrams.
- Two separate loops are enough; a nested loop is not needed.
- Returning `true` after the second loop means every character in `t` was matched successfully.
```typescript
count.set(s[i], (count.get(s[i]) ?? 0) + 1);
```
- Key doesn’t exist yet: count.get(s[i]) returns undefined, so ?? 0 turns it into 0. Then 0 + 1 = 1, and .set() adds a new entry with value 1.
    Key already exists: .get() returns the current number, + 1 increments it, and .set() overwrites the existing entry. It doesn’t add a duplicate, because a Map can only have one entry per key. (`No need to use if condition`);

## Complexity Analysis

Let `n` be the length of the strings.

- **Time complexity:** `O(n)` — each string is traversed once.
- **Space complexity:** `O(k)` — the map stores distinct characters, where `k` is the number of distinct characters. For a fixed character set, this is `O(1)` auxiliary space.

## Quick Tests

| `s` | `t` | Expected |
|---|---|---|
| `"anagram"` | `"nagaram"` | `true` |
| `"rat"` | `"car"` | `false` |
| `"aab"` | `"aba"` | `true` |
| `"aab"` | `"abb"` | `false` |
| `"abc"` | `"ab"` | `false` |
