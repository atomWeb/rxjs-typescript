import { from, of } from "rxjs";
import { distinct } from "rxjs/operators";

// Distinc emite siempre que la anterior emisión haya sido diferente
// Pero "sabe" cuales han sido emitidos para no repetir nunca.

const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

const numeros$ = of(1, 1, 1, 3, 3, 2, 2, 4, 4, 5, 3, 1);

numeros$
  .pipe(distinct())
  .subscribe(observer);

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  {
    nombre: "Megaman"
  },
  {
    nombre: "X"
  },
  {
    nombre: "Zero"
  },
  {
    nombre: "Dr. Willy"
  },
  {
    nombre: "Megaman"
  },
  {
    nombre: "Zero"
  },
  {
    nombre: "Megaman"
  },
]


// from(personajes)
//   .pipe(distinct()) // Asi los pone todos porque son objetos diferentes
//   .subscribe(observer);

from(personajes)
  .pipe(distinct(p => p.nombre))
  .subscribe(observer);  