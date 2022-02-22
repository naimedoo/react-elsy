//  01 - Sum
// Créez un tableau vide `numbers`
// à l'aide d'une boucle for, ajouter 50 éléments aléatoire entre 0 et 100 dans votre tableau
// à l'aide d'une autre boucle for, calculez la somme des éléments de votre tableau

// let numbers = [];
// let elements = 50;
// let min = 0;
// let max = 100;

//  numbers = (Math.floor(Math.random() * (max - min + 1) + min));
//  console.log(numbers)

 // 02 - Max

 let numbers = [];
 let elementsQuantity = 50;
 let min = 50;
 let max = 200;

 for(let i = 1; i <= elementsQuantity; i++) {
    //  console.log(i)
     let randomNumber = Math.floor(Math.random() *(max - min + 1) + min)
     numbers.push(randomNumber)

 }
 console.log(numbers)
 let maxNumber = 0;
 for (let j = 0; j < numbers.length; j++) {
    console.log(j)
    if(numbers[i] > maxNumber){
        maxNumber = numbers[i]
    
    }

 }


