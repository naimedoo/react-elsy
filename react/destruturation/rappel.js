let prenom = ["Naim","alex","Mat"]
let prenom1 = prenom[0]
let prenom2 = prenom[1]
let prenom3 = prenom[2]

prenom1,prenom2,prenom3 = prenom;
console.log(prenom)

let tableau = prenom;
tableau.push("salut")
tableau = [...prenom]
console.log(tableau)