import { fromEvent } from "rxjs";
import { first, map } from "rxjs/operators";

const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

const click$ = fromEvent<PointerEvent>(document, "click");

// // Emite el primer click y termina
// click$
//     .pipe(
//         first() // Se podia hacer con take(1)
//     )
//     .subscribe(observer);

// // Emite 1, solo cuando se de click en una posición Y >= 150
// click$
//     .pipe(
//         first(event => event.clientY >= 150)
//     )
//     .subscribe(observer);

// Tip: Para no pasar todas las propiedades que emite el click
click$
  .pipe(
    // map(event => ({
    //   clientY: event.clientY,
    //   clientX: event.clientX
    // })),
    // lo mismo pero desestructurando el event
    map(({ clientX, clientY }) => ({ clientX, clientY })),
    first((event) => event.clientY >= 150)
  )
  .subscribe(observer);
    
    
