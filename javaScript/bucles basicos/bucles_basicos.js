"use strict";
// let hora = 0;
// let reloj = "cucu";

// for (let hora = 0; hora < 24; hora++) {
//   if (hora > 8) {
//     console.log(reloj);
//   }

//   console.log(hora );
// }
// //   console.log("son las", +hora, ":00");
// //

// let i = 0;

// while (i <= 23) {
//   if (i >= 8 && i <= 22) {
//     console.log(`son las ${i}:00,cucu`);
//   } else console.log(`son las ${i}:00`);

//   i++;
// }
let i = 0;

while (i <= 23) {
  if (i >= 8 && i <= 22) {
    if (i > 12) {
      console.log(`son las ${i}:00,cucu`.repeat(i - 12));
    } else console.log(`son las ${i}:00,cucu`.repeat(i));
  } else console.log(`son las ${i}:00`);

  i++;
}
