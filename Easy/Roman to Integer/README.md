# Roman to Integer

## Problem Description

Given a string containing a Roman numeral, convert it into an integer.

Roman numerals use the following symbols:

| Symbol | Value |
|---|---:|
| I | 1 |
| V | 5 |
| X | 10 |
| L | 50 |
| C | 100 |
| D | 500 |
| M | 1000 |

Normally, Roman numeral values are added together. However, when a smaller value appears before a larger value, the smaller value is subtracted.

### Examples

**Example 1**

```text
Input: s = "III"
Output: 3
Explanation: 1 + 1 + 1 = 3
```

**Example 2**

```text
Input: s = "LVIII"
Output: 58
Explanation: 50 + 5 + 1 + 1 + 1 = 58
```

**Example 3**

```text
Input: s = "MCMXCIV"
Output: 1994
Explanation: 1000 + 900 + 90 + 4 = 1994
```

## Solution

```typescript
function romanToInt(s: string): number {
    const romanMap = new Map<string, number>([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000]
    ]);

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const value = romanMap.get(s[i]);
        const next = romanMap.get(s[i + 1]);

        if (value < next) {
            result -= value;
        } else {
            result += value;
        }
    }

    return result;
}
```

## Concepts Learned

### 1. Using `Map` in TypeScript

A `Map` stores key-value pairs. In this problem, each Roman numeral symbol is associated with its integer value.

```typescript
const romanMap = new Map<string, number>([
    ["I", 1],
    ["V", 5],
    ["X", 10]
]);
```

- `string` represents the key type.
- `number` represents the value type.
- `.get(key)` retrieves the value associated with a key.

For example:

```typescript
romanMap.get("X"); // 10
romanMap.get("I"); // 1
```

**What we learned:** Instead of writing many `if` or `switch` statements to convert symbols into numbers, we can use a Map to look up their values.

### 2. Understanding `.get()`

```typescript
const value = romanMap.get(s[i]);
const next = romanMap.get(s[i + 1]);
```

Here, we retrieve two values:

- `value` is the numeric value of the current Roman numeral.
- `next` is the numeric value of the next Roman numeral.

For example, if `s = "IV"`:

- At index `0`, `value` is `1`.
- At index `1`, `next` is `5`.

We compare these values to determine whether the current numeral should be added or subtracted.

**Important TypeScript note:** `Map.get()` can return `undefined` when a key does not exist. In this problem, `s[i + 1]` is also `undefined` when we reach the end of the string. A strict TypeScript configuration may therefore require handling these possibilities explicitly.

### 3. Understanding Array and String Indexing

Strings use zero-based indexing, meaning the first character is at index `0`.

For example:

```text
s = "IVX"

Index:      0   1   2
Character:  I   V   X
```

When we write:

```typescript
s[i]
```

we get the current character.

When we write:

```typescript
s[i + 1]
```

we get the character immediately after it.

**What we learned:** Looking at the next element is useful when the meaning of the current element depends on what follows it.

### 4. Understanding the Subtraction Rule

```typescript
if (value < next) {
    result -= value;
} else {
    result += value;
}
```

This is the central logic of the solution.

If the current value is smaller than the next value, subtract the current value. Otherwise, add it.

For example, with `"IV"`:

| Current | Next | Operation | Result |
|---|---:|---|---:|
| I = 1 | V = 5 | Subtract 1 | -1 |
| V = 5 | Undefined | Add 5 | 4 |

The final answer is `4`.

For `"VI"`, the logic is different:

| Current | Next | Operation | Result |
|---|---:|---|---:|
| V = 5 | I = 1 | Add 5 | 5 |
| I = 1 | Undefined | Add 1 | 6 |

The final answer is `6`.

**What we learned:** We do not need to create separate conditions for `IV`, `IX`, `XL`, `XC`, `CD`, or `CM`. Comparing the current value with the next value handles all six subtractive combinations.

### 5. Understanding `+=` and `-=`

These are shorthand assignment operators.

```typescript
result += value;
```

This is equivalent to:

```typescript
result = result + value;
```

Likewise:

```typescript
result -= value;
```

is equivalent to:

```typescript
result = result - value;
```

They let us update the running total without rewriting the entire assignment.

### 6. Understanding the Loop Boundary

```typescript
for (let i = 0; i < s.length; i++)
```

The loop processes every character, including the last one.

At the last character, `s[i + 1]` is outside the string, so the lookup returns `undefined`.

In JavaScript, comparing a number with `undefined` using `<` evaluates to `false`. Consequently, the final character follows the `else` branch and is added.

Although this works in JavaScript, explicitly handling the missing next value makes the logic easier to understand and more TypeScript-friendly.

## Time and Space Complexity

- **Time Complexity:** `O(n)` — each character is processed once, where `n` is the length of the Roman numeral.
- **Space Complexity:** `O(1)` — the Map contains a fixed number of seven Roman numeral symbols, regardless of the input length.

## Key Takeaways

- A `Map` stores key-value pairs and makes lookups straightforward.
- `.get()` retrieves a value using its key.
- `s[i]` accesses the current character, while `s[i + 1]` accesses the next character.
- Comparing the current value with the next value determines whether to add or subtract.
- The running total is updated using `+=` and `-=`.
- A single loop can handle both ordinary and subtractive Roman numeral combinations without hardcoding each pair.

## What I Learned

This problem helped me understand how a Map can replace repetitive conditional statements when converting symbols into values.

I also learned that the current element can depend on the next element. By comparing their values, I can decide whether to add or subtract instead of writing separate conditions for every special case.

The important lesson is to identify the general rule behind a problem. Once the rule is clear, a small amount of logic can handle many different inputs.