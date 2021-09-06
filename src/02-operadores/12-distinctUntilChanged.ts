import { from, of } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

// distinctUntilChanged emite siempre que la anterior emisión haya sido diferente

const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

const numeros$ = of(1, 1, 1, 3, 3, 2, 2, 4, 4, 5, 3, 1);

numeros$
  .pipe(distinctUntilChanged())
  .subscribe(observer);

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  {
    nombre: "Megaman"
  },
  {
    nombre: "Megaman"
  },
  {
    nombre: "X"
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



from(personajes)
  .pipe(distinctUntilChanged((ant, act) => ant.nombre === act.nombre))
  .subscribe(observer);  