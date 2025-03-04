import LinkedList from "./linked-list.js";

const fruits = new LinkedList();

fruits.append("Avocado");
fruits.append("Banana");
fruits.append("Grapes");
fruits.append("Orange");
fruits.append("Pineapple");

console.log("Initial List:");
console.log(fruits.toString());

fruits.prepend("Apple");
console.log('\nAfter Prepending "Apple":');
console.log(fruits.toString());

console.log("\nSize of List:", fruits.size);

console.log("\nHead:", fruits.head.value);
console.log("Tail:", fruits.tail.value);

console.log("\nNode at index 2:", fruits.at(2).value);

fruits.pop();
console.log("\nAfter popping the last element (Pineapple):");
console.log(fruits.toString());

console.log('\nList contains "Banana":', fruits.contains("Banana"));
console.log('List contains "Pineapple":', fruits.contains("Pineapple"));

console.log('\nIndex of "Grapes":', fruits.find("Grapes"));

fruits.insertAt("Mango", 4);
console.log('\nAfter inserting "Mango" at index 4:');
console.log(fruits.toString());

fruits.removeAt(3);
console.log("\nAfter removing the node at index 3 (Grapes):");
console.log(fruits.toString());

console.log("\nFinal Size of List:", fruits.size);
