// // 01 - File System

// const fs = require("fs");
// const { CLIENT_RENEG_WINDOW } = require("tls");

// fs.readFile("./jour07.txt", function (err, data) {
//     if (err) {
//        console.error(err);
//        return;
//     }
 
//     console.log("Lecture en différé : " + data.toString());
//  });

//  // 02 - Map Double

//  const array = [1, 2, 3, 4, 5];
//  let double = array.map((doubleNumber)=>{
//     return doubleNumber * 2
//  })
//  console.log(double)

//  // 03 - Map Names

//  const longNames =[
//      {
//      firstName : "Jane",
//      lastName : "Doe"
//      },
//     {
//      firstName : "John",
//      lastName : "Smith"
//     }
// ]

// const shortNames = longNames.map((shortName) => {
//     const name = {
//         name : shortName.firstName + " " + shortName.lastName
//     }
//     return name
// });
//  console.log(shortNames);
 

// //  04 - Filter Numbers

//  const array = [1, "toto", 34, "javaScript", 8];
//  const numbers = array.filter((element) => {
//     if(typeof(element) === "number")
//     return number
//  })
//   console.log(numbers)

//  //05 - Filter Even
//  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

//  let even = numbers.filter((num) => {
//    if(num % 2 === 0) {
//     return num
//    }
   
//  })
//  console.log(even)

 // 06 - Cakes

 let cakes = 
 [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]

const chocolate = cakes.filter((cake) => {
   return (cake.flavor === "chocolate")
   
})
   console.log(chocolate)

const unavailables = chocolate.map((unavailable) => {
   return (unavailable.status ="sold out")
   
})
   console.log(unavailables)

   


