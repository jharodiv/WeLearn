# Top K Frequent Elements

## Problem
Given an integer array `nums` and an integer `k`, return the `k` most frequent elements.

## Approach

I used a `Map` to count how many times each number appears, converted the Map entries into an array, sorted the entries by frequency in descending order, and returned the first `k` numbers.

### Step 1: Count Frequencies

I created a `Map<number, number>` to store each number and its frequency.

- The key represents the number.
- The value represents how many times the number appears.

I used `frequency.has()` to check whether the number already exists in the Map. If it doesn't exist, I initialize its frequency to `0`. Then, I increment its frequency by `1`.

### Step 2: Convert the Map into an Array

I used `Array.from(frequency.entries())` to convert the Map entries into an array.

Each entry contains two values:

- `entry[0]`: The number.
- `entry[1]`: The frequency of that number.

### Step 3: Sort by Frequency

I used `sort()` to arrange the entries by frequency in descending order.

```typescript
sorted.sort((a, b) => b[1] - a[1]);
```

This places the numbers with the highest frequencies first.

### Step 4: Return the Top K Elements

I used `slice(0, k)` to get the first `k` entries, then `map()` to extract only the numbers.

```typescript
return sorted.slice(0, k).map(entry => entry[0]);
```

## Example

**Input:**
```typescript
nums = [1, 1, 1, 2, 2, 3];
k = 2;
```

**Frequency Map:**
```text
1 → 3
2 → 2
3 → 1
```

**After Sorting:**
```text
[[1, 3], [2, 2], [3, 1]]
```

**Output:**
```typescript
[1, 2]
```

## What I Learned

- How to use `Map` to count the frequency of elements.
- How to check whether a key exists using `Map.has()`.
- How to convert Map entries into an array using `Array.from()`.
- How to sort arrays of pairs using a custom comparator.
- How to access values inside an array entry using indexes.
- How to use `slice()` to select a specific number of elements.
- How to use `map()` to extract values from an array of entries.

## Time and Space Complexity

Let `n` be the number of elements in `nums` and `m` be the number of unique elements.

- **Time Complexity:** `O(n + m log m)` — counting frequencies takes `O(n)`, and sorting the unique entries takes `O(m log m)`.
- **Space Complexity:** `O(m)` — the Map and the array of entries store the unique numbers and their frequencies.