//  //  01 - Somme des carrés
//  // Calculez la somme des carrés des nombres de 5 à 10
//  // Rappel: le carré d'un nombre est sa valeur, multipliée par lui même. exemple: 5x5 = 25
//  // Résultat attendu: 355

    let sum = 0;
    let i = 0;

    function multiply (num1, num2) {
        for(let i = num1; i<= num2; i++) {
            sum = (i * i) + sum
        }
        console.log(sum)
   }
     multiply(5, 10);

//   // 02 - Comptons
//  // Comptez combien il y a de mutliple de 7 (pensez au modulo !) entre 100 et 1000
//  // Résultat attendu: 12

    let number = 7;   
    let num1 =  100;
    let num2 = 1000;
    let result = 0;

    for(let i = num1; i <= num2; i++) {
       if(i % number === 0) {
           result++
        }
    }
  console.log(result)

 //  03 - Chanceux
 // Lancez un dé 20 fois et affichez la somme de tout les résultats plus grand ou égale à 5

  let rollTheDice = 20;
  let max = 5;
  let i = 1;
  let sum = 0;

  for (let i = 1; i <= rollTheDice; i++ ) {
   let dice = Math.floor(Math.random() * 6)  
   if(dice >= max ) {
        sum += dice;
    
    }
  }
  console.log(sum);