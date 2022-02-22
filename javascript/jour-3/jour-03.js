// 01 - Array
let fruits = ["mango","lemon","blueberry"];
console.log(fruits);
console.table(fruits)

// 02 - Access
let ingredients = ["eggs", "milk", "butter"];
console.log(ingredients[1]);
console.log(ingredients[2]);

// 03 - Add and Remove

let objects = ["pen", "book", "lamp"];
objects.unshift('chair')
console.log(objects)
objects.pop()
console.log(objects)
objects.push("laptop")
console.log(objects)
objects.shift()
console.log(objects)

// 04 - Order
let numbers = [4, 10, 8, 12, 6];
numbers.reverse();
console.log(numbers)
numbers.sort((a, b) => b - a);
console.log(numbers);

// 05 - Boucle

// let total = 0;
// let limit = 10;

// for(let i = 0; i <= limit; i++) {
//    total = total + i;
   
// }
// console.log(total);

  // 06 - Reverse
  let sentence = "Hello konexio";
  let result = "";
   for (let i = sentence.length - 1; i >= 0; i--) {
  // console.log(sentence[i])
  const letter = sentence.charAt(i);
  result = result + letter
    // result = result + sentence[i];
   
  }

 console.log(result)

 // bonus 
 let counter = 50;
 let final= 100;

 for (let i = counter; i <= final; i++) {
   if(i % 3 === 0) {
     console.log("Fizz");
   } else if ( i % 5 === 0) {
     console.log("buzz")
   } else if (i % 3 === 0 && i % 5 === 0) {
     console.log("fizzbuzz");
   }else if (i % 7=== 0) {
     break;
   } else {
     console.log(i);
   }
 }

 // BONUS 2

 let total = 0;
 let limit = 10;
 var i = 0;

   while (i < limit) {
      
      i++
      total  = total + i
      console.log(total)
};
   
// BONUS 3
let persons = [ "Naim", "Erfan", "alexandre", "Mateo"]
let dell = persons[Math.floor(Math.random() * persons.length)]
console.log(dell)

// BONUS 4

let array = []

for (let i = 0; i <= 19; i++) {
    let integer = Math.floor(Math.random() * 100)
    array.push(integer);
}
console.log(array)

let bigLargest = 0;

for (let i = 0; i <= array.length;i++) {
if (bigLargest < array[i]) {
  bigLargest = array[i]
}

}
console.log(bigLargest)