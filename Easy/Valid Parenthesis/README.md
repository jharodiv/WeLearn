# Valid Parentheses

## Problem Description

Given a string `s` containing only the characters `(`, `)`, `{`, `}`, `[` and `]`, determine whether the input string is valid.

A string is valid if:

1. Every opening bracket has a corresponding closing bracket of the same type.
2. Opening brackets are closed in the correct order.
3. Every closing bracket matches the most recently opened bracket that has not yet been closed.

### Examples

**Example 1**

```text
Input: s = "()"
Output: true
```

**Example 2**

```text
Input: s = "()[]{}"
Output: true
```

**Example 3**

```text
Input: s = "(]"
Output: false
```

**Example 4**

```text
Input: s = "([])"
Output: true
```

**Example 5**

```text
Input: s = "([)]"
Output: false
```

## Solution

```typescript
function isValid(s: string): boolean {
    const stack: string[] = [];

    const pairs: Record<string, string> = {
        ")": "(",
        "]": "[",
        "}": "{"
    };

    for (let i = 0; i < s.length; i++) {
        const current = s[i];

        if (current === "(" || current === "[" || current === "{") {
            stack.push(current);
        } else {
            if (
                stack.length === 0 ||
                stack[stack.length - 1] !== pairs[current]
            ) {
                return false;
            }

            stack.pop();
        }
    }

    return stack.length === 0;
}
```

## Concepts Learned

### 1. Understanding a Stack

A stack is a data structure that follows the **LIFO (Last In, First Out)** principle.

This means the last item added is the first item removed.

Imagine stacking plates: the last plate you put on top is the first one you take off.

In this problem, the stack keeps track of opening brackets that have not yet been matched with closing brackets.

```typescript
const stack: string[] = [];
```

This creates an empty array that we use as a stack.

### 2. Using `.push()` and `.pop()`

JavaScript arrays provide methods that make implementing a stack simple.

**`.push()` adds an item to the top of the stack.**

```typescript
stack.push(current);
```

For example, if the input contains `"(["`, the stack becomes:

```text
["(", "["]
```

**`.pop()` removes the most recently added item.**

```typescript
stack.pop();
```

If the stack contains:

```text
["(", "["]
```

Calling `.pop()` removes `"["`, leaving:

```text
["("]
```

**What we learned:** We do not need to build a separate stack data structure from scratch. An array with `.push()` and `.pop()` is enough for this problem.

### 3. Understanding `Record<string, string>`

```typescript
const pairs: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{"
};
```

`Record` is a TypeScript utility type that describes an object with keys and values of specified types.

Here:

- The first `string` means the keys are strings.
- The second `string` means the values are strings.

The object maps each closing bracket to its corresponding opening bracket.

For example:

```typescript
pairs[")"]; // "("
pairs["]"]; // "["
pairs["}"]; // "{"
```

This allows us to check the matching bracket without writing separate comparison logic for every closing bracket.

### 4. Identifying Opening Brackets

```typescript
if (
    current === "(" ||
    current === "[" ||
    current === "{"
) {
    stack.push(current);
}
```

When the current character is an opening bracket, we push it onto the stack.

For example, given:

```text
s = "([])"
```

The stack changes as follows:

| Character | Action | Stack |
|---|---|---|
| `(` | Push | `["("]` |
| `[` | Push | `["(", "["]` |
| `]` | Match and pop | `["("]` |
| `)` | Match and pop | `[]` |

Since all brackets are matched and the stack is empty at the end, the string is valid.

### 5. Understanding `stack[stack.length - 1]`

```typescript
stack[stack.length - 1]
```

This accesses the last element of the stack without removing it.

For example:

```typescript
const stack = ["(", "["];
```

The stack length is `2`, so:

```typescript
stack[stack.length - 1]; // "["
```

We use this to check the most recently opened bracket before deciding whether to remove it.

**What we learned:** `.pop()` removes the last item, while `stack[stack.length - 1]` only reads the last item.

### 6. Why We Check for an Empty Stack

```typescript
if (stack.length === 0 || stack[stack.length - 1] !== pairs[current]) {
    return false;
}
```

There are two reasons to return `false`.

**Case 1: No opening bracket exists.**

For an input such as:

```text
s = ")"
```

The stack is empty, so there is no opening bracket to match the closing bracket.

**Case 2: The brackets do not match.**

For an input such as:

```text
s = "(]"
```

The stack contains `"("`, but `pairs["]"]` expects `"["`.

Since they are different, the function returns `false`.

The `||` operator means either condition is enough to make the string invalid.

### 7. Why We Return `stack.length === 0`

```typescript
return stack.length === 0;
```

After processing every character, we check whether the stack is empty.

Consider this input:

```text
s = "((("
```

Every character is an opening bracket, so all three are pushed onto the stack. No closing brackets remove them.

The final stack is:

```text
["(", "(", "("]
```

Since the stack is not empty, the string is invalid.

This final check is important because a string can contain opening brackets that were never closed, even if no mismatched closing bracket was encountered.

## Time and Space Complexity

- **Time Complexity:** `O(n)` — each character is processed once, where `n` is the length of the string.
- **Space Complexity:** `O(n)` — in the worst case, the stack stores every character when the input contains only opening brackets.

## Key Takeaways

- A stack follows the Last In, First Out (LIFO) principle.
- `.push()` adds an item, and `.pop()` removes the most recently added item.
- `Record<string, string>` lets us map closing brackets to opening brackets.
- `stack[stack.length - 1]` checks the most recent opening bracket.
- An empty stack before a closing bracket means there is nothing to match.
- Returning `false` immediately avoids unnecessary processing when a mismatch is found.
- Checking `stack.length === 0` at the end ensures that every opening bracket has been closed.

## What I Learned

This problem helped me understand why some problems require a stack instead of simply counting characters.

For example, `"([])"` and `"([)]"` contain the same number of opening and closing brackets, but only the first string is valid. The order in which brackets are opened and closed matters.

Using a stack allows me to remember the most recent opening bracket and check whether the next closing bracket matches it.

The main lesson is that choosing the right data structure can simplify the logic of a problem. Here, the LIFO behavior of a stack naturally matches the rules of valid parentheses.