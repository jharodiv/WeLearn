# Add Two Numbers

### Description
The `addTwoNumbers` function adds two numbers represented by singly linked lists. Each node contains a single digit, and the digits are stored in **reverse order**. The function returns the sum as a new linked list, also in reverse order.

### How It Works
1. **Initialize the result list:** Create a dummy node (`result`) to serve as the starting point of the output linked list. Use `current` to track where new nodes should be added.
2. **Set up pointers:** Use `current1` and `current2` to traverse the two input linked lists. Initialize `carry` to `0`.
3. **Loop through the lists:** Continue while either list has remaining nodes or a carry still needs to be processed.
4. **Get the current digits:** Read the values from both lists. If a list has no remaining node, use `0` as its value.
5. **Calculate the sum:** Add both digits and the carry.
6. **Extract the digit and carry:**
   - `sum % 10` gets the digit to store in the new node.
   - `Math.floor(sum / 10)` calculates the carry for the next position.
7. **Create a new node:** Append the calculated digit to the result list and move the `current` pointer forward.
8. **Move to the next nodes:** Advance both input pointers if they are not `null`.
9. **Return the result:** Return `result.next` to exclude the dummy node from the final linked list.

### Example

**Input:**
```typescript
l1 = [2, 4, 3]
l2 = [5, 6, 4]
```

**Output:**
```typescript
[7, 0, 8]
```

**Explanation:**

The linked lists represent the numbers `342` and `465` because their digits are stored in reverse order.

```text
  342
+ 465
-----
  807
```

The sum is `807`, so the returned linked list contains `[7, 0, 8]`.

### Complexity Analysis

- **Time Complexity:** `O(max(n, m))` — Each node in both linked lists is visited at most once, with an additional iteration if a final carry remains.
- **Space Complexity:** `O(max(n, m))` — A new linked list is created to store the sum, where `n` and `m` are the lengths of the input lists.

### Key Concepts
- **Singly linked lists:** Each node stores a value and a reference to the next node.
- **Pointers:** Variables such as `current1`, `current2`, and `current` track positions in the linked lists.
- **Carry:** Stores the value carried over when the sum of two digits is greater than or equal to `10`.
- **Modulo (`%`):** Extracts the last digit of the sum.
- **Floor division (`Math.floor`):** Calculates the carry for the next digit.
- **Dummy node:** Simplifies linked-list construction by providing a starting point for the result.