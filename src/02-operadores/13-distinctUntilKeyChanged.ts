import { from } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

// distinctUntilKeyChanged emite siempre que la anterior emisión haya sido diferente
// Pero valida una clave

const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

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
  .pipe(distinctUntilKeyChanged("nombre"))
  .subscribe(observer);  