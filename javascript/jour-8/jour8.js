// //  01 - Countries

// const request = require('request')

// const apiBase = "https://restcountries.com/v3.1/all" 

// const country1 ="";
// const apiUrlCountry1 = apiBase + country1;
// let countriesNames = [];

// request.get(apiUrlCountry1,(err,res,body)=> {
//     if(err) {
//         console.log(err)
//         return
//     }
//    const country = JSON.parse(body);

//    for(let i = 0; i < country.length; i++) {
//     let countryName = (country[i].name.common);
//     countriesNames.push(countryName)
//    }
// console.log(countriesNames.join("///"))
//  })
 

//  //02 - Chuck Norris
//  //À l'aide de l'api suivante (lisez bien la documentation) : [https://api.chucknorris.io/](https://api.chucknorris.io/)

// //- Créez une fonction asynchrone `getFact` qui récupèrera une blague Chuck Norris aléatoire à chaque fois que la fonction est lancée,
//  //et qui l'affichera dans la console

// // var request = require('request')
// const url = "https://api.chucknorris.io/jokes/random";

// request.get(url,(err,res,body) => {
//      if(err) {
//          console.log(err);
//          return
//      }
//      const jokes = JSON.parse(body).value;
//         console.log(jokes);
// })

// // // 03 - Pokemon

// // var request = require("request")

// const catchPokemon = (id) => {
// const url = " https://pokeapi.co/api/v2/pokemon/pikachu" + id 
// request.get(url,(err,res,body)=> {
//     if(err){
//         console.log(err)
//         return
//     }
//     const pokemon = JSON.parse(body)
//     const pokemonName = pokemon.name;
// console.log("id",id,"\n")

// })
// }
// catchPokemon(Math.floor(Math.random() * (800 - 0) + 1) - min)

