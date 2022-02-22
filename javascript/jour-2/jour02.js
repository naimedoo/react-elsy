// 01 - Number

let integer = 102;
let float = 13.9;
console.log(integer);
console.log(float);

 // 03- Round

 let sum = 1.5;
 let rounded = Math.round(sum);
 console.log(rounded);

 // 02 - Convert
 let basic = 34;
 let stringified = basic.toString();
 console.log(stringified);

 // 04 - Arithmétique
//   let test = 12;
//   let bis = 5;
//   console.log(test + bis);
//   console.log(test - bis);
//   console.log(test / bis);
//   console.log(test * bis);

  // 05 - Comparaison
  let test = 143;
  let bis = 219;
  console.log(test > bis);
  console.log(test < bis);
  console.log(test >= bis);
  console.log(test <= bis);
  console.log(test == bis);
  console.log(test === bis);
  console.log(test != bis);
  console.log(test !== bis);

// 06 - Condition

   let limit = 50;
  let score = 35;
   if (score >= limit) {
       console.log("ok good")
   } else {
       console.log("Oh nooo...")
 }
 
  // 07 - Condition II
    let password = "azerty";
    if (password.length > 5) {
        console.log("The password is secure")
    }

   // 08 - Condition III

   const limit = 50;
   let score = 35;
   let password = "azerty";

   if ( score < limit && password.length > 5) {
       console.log("Everything is good");
   } else if (score > limit || password > 5 ) {
       console.log("Something is good");
   } else {
       console.log("Nothing is good");
   }

   // Bonus 
   let random = 5;

   if (random === 6) {
       console.log("Yes I win !");
   } else {
       console.log("so close...")
   } 

   // Bonus II

   let month = "April";
   switch (month) {
       case "december":
       case "january":
       case "february":
           console.log("winter")
       break;
       case "March":
       case "April":
       case "May":
        console.log("spring")
       break;
       case"june":
       case "august":
       case"july":
        console.log("summer")
       break;  
       case "default" :
        console.log("fall")
       break;
    }

    //  Bonus III
    let roundedNumber = 6.3;

     if (roundedNumber < 0) {
         console.log(Math.round(Math.floor(roundedNumber)).toString())
     } if(roundedNumber > 0) {
         console.log(Math.round(Math.ceil(roundedNumber)).toString())
     }
    
  