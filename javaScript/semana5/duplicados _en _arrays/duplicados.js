"use strict";
const names = [
  "A-Jay",
  "Manuel",
  "Manuel",
  "Eddie",
  "A-Jay",
  "Su",
  "Reean",
  "Manuel",
  "A-Jay",
  "Zacharie",
  "Zacharie",
  "Tyra",
  "Rishi",
  "Arun",
  "Kenton",
];

//Organizando el arry con .sort para acomodar los elementos

const primerArr = [...names].sort();
//console.log(primerArr);

let arregloUnico = []; // Donde se creara el nuevo array

function nuevoArr(primerArr) {
  for (let i = 0; i < primerArr.length; i++) {
    //console.log(primerArr[i]);

    if (arregloUnico.includes(primerArr[i])) {
      //console.log("se repite " + primerArr[i]);
    } else {
      arregloUnico.push(primerArr[i]);
      //console.log(primerArr[i]);
    }
  }

  console.log(arregloUnico);
}
console.log(nuevoArr(primerArr));
