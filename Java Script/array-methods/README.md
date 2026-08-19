# slice-splice.js

A JavaScript program demonstrating the difference between `Array.prototype.slice()` and `Array.prototype.splice()` — one non-mutating, one mutating.

## The code

```javascript
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log("Original Array:", fruits);
let slicedFruits = fruits.slice(1, 4);
console.log("After slice(1, 4):", slicedFruits);
console.log("Original Array after slice():", fruits);

let removedFruits = fruits.splice(1, 2, "Peach", "Watermelon");
console.log("Removed Elements:", removedFruits);
console.log("Original Array after splice():", fruits);
```

## How it works

### `slice(start, end)` — non-mutating

`fruits.slice(1, 4)` returns a **new array** containing a shallow copy of elements from index `1` up to (but not including) index `4`. It does **not** modify the original array in any way.

- `fruits` before: `["Apple", "Banana", "Mango", "Orange", "Grapes"]`
- Indices 1–3: `"Banana"`, `"Mango"`, `"Orange"`
- `slicedFruits` = `["Banana", "Mango", "Orange"]`
- `fruits` remains unchanged: `["Apple", "Banana", "Mango", "Orange", "Grapes"]`

### `splice(start, deleteCount, ...items)` — mutating

`fruits.splice(1, 2, "Peach", "Watermelon")` **modifies `fruits` in place**:

- Starting at index `1`, it removes `2` elements (`"Banana"` and `"Mango"`).
- It then inserts `"Peach"` and `"Watermelon"` at that same position.
- It **returns** an array of the removed elements: `["Banana", "Mango"]`.
- `fruits` is now `["Apple", "Peach", "Watermelon", "Orange", "Grapes"]`.

## Output

```
Original Array: [ 'Apple', 'Banana', 'Mango', 'Orange', 'Grapes' ]
After slice(1, 4): [ 'Banana', 'Mango', 'Orange' ]
Original Array after slice(): [ 'Apple', 'Banana', 'Mango', 'Orange', 'Grapes' ]
Removed Elements: [ 'Banana', 'Mango' ]
Original Array after splice(): [ 'Apple', 'Peach', 'Watermelon', 'Orange', 'Grapes' ]
```

## Key takeaway

| Method    | Mutates original array? | Returns                                 |
|-----------|--------------------------|------------------------------------------|
| `slice()` | No                        | A new array — a shallow copy of the extracted range |
| `splice()`| Yes                       | An array of the elements that were removed |

- Use **`slice()`** when you need a copy of part of an array without touching the original — useful in patterns that rely on immutability (e.g. React state updates).
- Use **`splice()`** when you specifically want to remove and/or insert elements in the original array itself. Be mindful that it mutates the array in place, which can cause unexpected side effects if other code holds a reference to the same array.

## Running

```bash
node slice-splice.js
```

## Requirements

- Node.js (or any JavaScript runtime/browser console) supporting standard ES5+ Array methods
