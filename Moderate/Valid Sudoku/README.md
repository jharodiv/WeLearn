# Valid Sudoku

## Problem
Determine whether a partially filled 9 × 9 Sudoku board is valid.

A Sudoku board is valid when:
- Each row contains no duplicate numbers from 1–9.
- Each column contains no duplicate numbers from 1–9.
- Each 3 × 3 box contains no duplicate numbers from 1–9.
- Empty cells represented by `"."` are ignored.

## Approach

Used **Nested Loops and Sets** to validate the Sudoku board through three separate checks.

### 1. Row Validation
- Used an outer loop to iterate through all 9 rows.
- Initialized a new `Set<string>` for every row.
- Used an inner loop to traverse each column.
- Used `seen.has(current)` to check for duplicates.
- Used `seen.add(current)` to track encountered numbers.
- Skipped empty cells using `continue`.

### 2. Column Validation
- Used an outer loop to iterate through all 9 columns.
- Initialized a new Set for every column.
- Used an inner loop to traverse each row.
- Accessed cells using `board[row][col]`.
- Applied the same duplicate-checking logic used for rows.

### 3. 3 × 3 Box Validation
- Used two outer loops with `row += 3` and `col += 3` to identify the starting positions of all nine boxes.
- Initialized a new Set for each box.
- Used two additional inner loops (`i` and `j`) to traverse the nine cells inside each box.
- Accessed cells using `board[row + i][col + j]`.
- Checked for duplicates using the Set.

## Key Concepts Learned

- **2D Arrays:** Accessing individual cells using `board[row][col]`.
- **Nested Loops:** Traversing rows and columns.
- **Set:** Tracking previously encountered values to detect duplicates.
- **Set.has():** Checking whether a value already exists.
- **Set.add():** Adding a value to the Set.
- **continue:** Skipping empty cells.
- **Loop Increment (`+= 3`):** Moving between 3 × 3 boxes.
- **Variable Initialization:** Creating a fresh Set for every row, column, and box.
- **Early Return:** Returning `false` immediately when a duplicate is detected.

## Complexity Analysis

- **Time Complexity:** O(1) for a fixed 9 × 9 Sudoku board. More generally, O(n²) for an n × n board.
- **Space Complexity:** O(1) for a fixed-size Sudoku board. More generally, O(n) auxiliary space for the Set.

## Main Takeaway

The key to solving Valid Sudoku is understanding that rows, columns, and 3 × 3 boxes require separate validation processes.

A Set makes duplicate detection straightforward because it allows us to check whether a value has already been encountered without comparing every element against the others.