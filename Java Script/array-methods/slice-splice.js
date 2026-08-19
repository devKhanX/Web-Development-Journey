let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log("Original Array:", fruits);
let slicedFruits = fruits.slice(1, 4);
console.log("After slice(1, 4):", slicedFruits);
console.log("Original Array after slice():", fruits);

let removedFruits = fruits.splice(1, 2, "Peach", "Watermelon");
console.log("Removed Elements:", removedFruits);
console.log("Original Array after splice():", fruits);
