// 01 - Comptons

  let num = 50;
  let num2 = 200;

  while ( num <= num2 ) {
       if (num % 2 === 0) {
          console.log(num,"est pair");
      }
      num++
 }
  console.log(num)

// 02 - Try again

let dice = null;
let count = 0;
let min = 1;
let max = 6;

while (dice < 6) {
    dice = Math.floor(Math.random() * (max - min + 1) + min);
    console.log("dice ==> ", dice)
    count++

}
console.log("compteur ==> " ,count);

// 03 - Course

 let ussainBolt = 0;
 let tysonGay = 0;
 let mins = 1;
 let max1 = 10;
 let countU = 0;
 let countT =0;


 while ( ussainBolt< 100 && tysonGay< 100) {
    countU = (Math.floor(Math.random() * (max1 - mins + 1) + mins));
    console.log(ussainBolt)
    countT = Math.floor(Math.random() * (max1 - mins + 1) + mins);
    ussainBolt+=countU;
    tysonGay+=countT;
    if (ussainBolt >= 100) {
        console.log("UssainBolt à gagné" + " " + ussainBolt)
   } else {
        console.log("TysonGay à gagné" + " " + tysonGay)
    }

 }


