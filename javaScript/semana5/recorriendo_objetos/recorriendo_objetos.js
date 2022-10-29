"use strict";

const people = {
  Maria: 20,
  Ana: 14,
  Luis: 16,
  Pepe: 35,
  Manuel: 50,
  Teresa: 12,
  Daniel: 27,
  Irene: 23,
  Alex: 10,
};

let valores = Object.keys(people);
//   //   console.log(people[valor]);

//for (valores in people) {
//  console.log(valores, people[valores]);

//const name = valores;
//const age = people[valores];
function reciba(valores, age) {
  for (valores in people) {
    let valor = valores;

    if (people[valores] >= 18) {
      console.log(`${valor}  es mayor de edad`);
    } else {
      console.log(`${valor} es menor de edad`);
    }
  }
}

console.log(reciba(valores, people[valores]));

// for (let i = 0; i < valores.length; i++) {
//   let valor = valores[i];
//   // console.log(people[valor]);
//   if (people[valor] >= 18) {
//     console.log(`${people[valor]} es mayor de edad`);
//   } else {
//     console.log(`${people[valor]} es menor de edad`);
//   }

//}

//return "es menor de edad";
//     //return "es mayor de edad";
