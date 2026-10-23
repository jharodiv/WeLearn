# Group Anagrams

## Problem
Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.

Two strings are anagrams if they contain the same characters with the same frequencies, but the characters may appear in a different order.

### Example
**Input:**
```typescript
strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
```

**Output:**
```typescript
[
    ["eat", "tea", "ate"],
    ["tan", "nat"],
    ["bat"]
]
```

## Approach

I used a `Map<string, string[]>` to group words that have the same characters.

### 1. Create a Map
```typescript
const groups = new Map<string, string[]>();
```

- The key is a sorted version of each word.
- The value is an array containing words that share the same sorted characters.

For example:
- `"eat"` → `"aet"`
- `"tea"` → `"aet"`
- `"ate"` → `"aet"`

Since these words have the same key, they belong to the same group.

### 2. Generate a Key for Each Word
```typescript
const key = word.split("").sort().join("");
```

- `split("")` converts the string into an array of characters.
- `sort()` arranges the characters alphabetically.
- `join("")` converts the sorted characters back into a string.

For example:
```typescript
"eat".split("").sort().join(""); // "aet"
"tea".split("").sort().join(""); // "aet"
```

### 3. Check if the Key Exists
```typescript
if (!groups.has(key)) {
    groups.set(key, []);
}
```

- `groups.has(key)` checks whether the key already exists in the Map.
- If the key does not exist, `groups.set(key, [])` creates a new group with an empty array.
- If the key already exists, the existing group is reused.

### 4. Add the Word to Its Group
```typescript
groups.get(key)!.push(word);
```

- `groups.get(key)` retrieves the array associated with the key.
- `push(word)` adds the current word to that array.
- The `!` is TypeScript's non-null assertion operator. It tells TypeScript that the value is not `null` or `undefined`.

Because the key was created if it did not exist, the corresponding array is available when adding the word.

### 5. Return the Groups
```typescript
return Array.from(groups.values());
```

- `groups.values()` retrieves all the arrays stored in the Map.
- `Array.from()` converts those values into a regular array.

The result is a two-dimensional array containing all the anagram groups.

## Key Concepts Learned

- **Map:** Stores key-value pairs and helps organize related data.
- **Set vs. Map:** A Set stores unique values, while a Map stores values associated with keys.
- **String Manipulation:** Used `split()`, `sort()`, and `join()` to generate a consistent key.
- **`has()`:** Checks whether a key exists in a Map.
- **`get()`:** Retrieves the value associated with a key.
- **`set()`:** Creates or updates a key-value pair.
- **`push()`:** Adds an element to an array.
- **`Array.from()`:** Converts an iterable into an array.
- **Anagram Grouping:** Uses sorted strings as keys to identify words containing the same characters.

## Complexity Analysis

Let:
- `n` = number of strings.
- `k` = maximum length of a string.

### Time Complexity: O(n × k log k)

For each string:
- Splitting the string takes O(k).
- Sorting its characters takes O(k log k).
- Joining the characters takes O(k).
- Looking up the key and adding the word takes O(1) on average.

Since each string is processed once, the overall time complexity is **O(n × k log k)**.

### Space Complexity: O(n × k)

The Map stores the sorted keys and groups of original strings. The total space required is proportional to the total number of characters stored across the input strings, excluding temporary processing space.

## What I Learned

I learned how to use a Map to group strings based on a common property instead of comparing every string against every existing group.

By sorting each word, I can generate a consistent key for all its anagrams. This allows me to check whether a group already exists and insert the word into the correct array.

This approach is more organized than manually comparing each word against every group.