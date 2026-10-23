# Contains Duplicate

## Problem Description

Given an integer array `nums`, return `true` if any value appears at least twice in the array. Return `false` if every element is distinct.

## How It Works

1. **Create a Set:** Initialize `seen` to store numbers that have already been encountered.
2. **Loop Through the Array:** Iterate through each element in `nums`.
3. **Check for Duplicates:** Use `seen.has(num)` to check whether the current number already exists in the Set.
   - If it exists, return `true` because a duplicate has been found.
   - If it does not exist, add the number to the Set using `seen.add(num)`.
4. **Return False:** If the loop finishes without finding any duplicates, return `false`.

## Example 1

**Input:**
```typescript
nums = [1, 2, 3, 1];
```

**Output:**
```typescript
true
```

**Explanation:**

The number `1` appears twice in the array. When the loop encounters the second `1`, `seen.has(num)` returns `true`, so the function returns `true`.

## Example 2

**Input:**
```typescript
nums = [1, 2, 3, 4];
```

**Output:**
```typescript
false
```

**Explanation:**

Every number is unique. The loop finishes without finding a duplicate, so the function returns `false`.

## What I Learned

- **Set:** A JavaScript `Set` stores unique values and allows efficient membership checks.
- **`seen.has(num)`:** Checks whether a number has already been encountered.
- **`seen.add(num)`:** Adds a number to the Set.
- **Early Return:** Returning `true` immediately when a duplicate is found avoids unnecessary iterations.
- **Boolean Return Values:** The function returns `true` if a duplicate exists and `false` otherwise.

## Time and Space Complexity

- **Time Complexity:** `O(n)` — In the worst case, the function visits every element in the array. Set lookups and insertions take `O(1)` on average.
- **Space Complexity:** `O(n)` — In the worst case, the Set stores every element if all numbers are unique.