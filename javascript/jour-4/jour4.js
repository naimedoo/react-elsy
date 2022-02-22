 // 01 - Object

 let cat = {
    name : "Garfield",
     age : 3,
     isCute : true
 }
  console.log(cat)
  console.log(cat.age)

  if (cat.isCute === true) {
   console.log("So cute !");
  } 
 

 // 02 - Combine

  let cat2 = {
     name : "lili",
     age : 10,
     isCute : false
  }

 let cats = [cat, cat2];
 console.log(cats[0].age);
 console.log(cats[1].isCute);


 


 // 03 - Even

//  function chekIfEven(num){
//      if(num % 2 === 0) {
//          console.log('even')
//      } else {
//          console.log('odd')
//      }
//  }
//  chekIfEven(2)
//  chekIfEven(11)
//  chekIfEven(40)
//  chekIfEven(33)
//  chekIfEven(71)
//  console.log(chekIfEven)

 // 04 - Compare

 function compare (num1,num2) {
     if(num1 > num2) {
         console.log("num1 is bigger")
     } else if (num2 > num1) {
         console.log("num2 is bigger")
     } else if (num1 === num2) {
         console.log("both are the same ")
     } else  {
         console.log("Error")
     }
 }

 let numbers = [2,13,34,98]

 for(let i = 0; i <= numbers.length; i++) {
    for(let j = 0; j <= numbers.length; j++) {
        compare(numbers[i], numbers[j])
    }
 }
//  compare(5,10)
//  compare(40,20)
//  compare(5,100)
//  compare(300,300)
 console.log(compare)

 
 // 05 - Add Up

 function addUp(num) {
     let number = 0
     for (let i = num; i >= 0; i--) {
       number = number + i

    }
    console.log(number)
}
 addUp(12);

 // 06 TIME 

 function format(num) {
     let hours = 0;
     let minutes = 0;
     let seconds = 0;
    
     hours = Math.floor[num / 3600]
     let restHours = num % 3600;
    
     minutes = Math.floor[restHours / 60]
     let restMinutes = restHours % 60;

     seconds = Math.floor[restMinutes / 3600];
     let restSeconds = restMinutes % 3600

       return hours + ":" + minutes + ":" + seconds
}
 format(3700);
 console.log(format)
 


 



 