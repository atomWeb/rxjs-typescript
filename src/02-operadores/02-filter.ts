import { range, from, fromEvent } from "rxjs";
import { filter, map } from "rxjs/operators";

range(1, 10)
  .pipe(
    filter((val, idx) => {
      console.log("index", idx);
      return val % 2 === 1;
    })
  )
  .subscribe(console.log);

interface Personaje {
  tipo: string;
  nombre: string;
}

const personajes: Personaje[] = [
  {
    tipo: "heroe",
    nombre: "Batman",
  },
  {
    tipo: "heroe",
    nombre: "Robin",
  },
  {
    tipo: "Villano",
    nombre: "Joker",
  },
];

from(personajes)
  .pipe(filter((p) => p.tipo === "heroe"))
  .subscribe(console.log);

// const personajes$ = from(personajes);

// personajes$.pipe(
//   filter((item) => {
//     return item.tipo === "heroe";
//   })
// )
// .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  map((event) => event.code),
  filter((key) => key === "Enter")
);

keyup$.subscribe(console.log);
