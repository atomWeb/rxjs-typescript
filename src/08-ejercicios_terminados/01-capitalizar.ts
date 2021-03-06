/**
 * Ejercicio:
 * El objetivo de es realizar la misma impresión, pero usando observables
 * Nota: NO hay que usar el ciclo "FOR OF", usar un observable y llamar la función capitalizar
 */

/**
 * Salida esperada:
 * Batman
 * Joker
 * Doble Cara
 * Pingüino
 * Hiedra Venenosa
 */
 import { from } from "rxjs";
 import { map } from "rxjs/operators";
 
 (() => {
   const nombres = [
     "batman",
     "joker",
     "doble cara",
     "pingüino",
     "hiedra venenosa",
   ];
 
   const capitalizar = (nombre: string) =>
     nombre.replace(
       /\w\S*/g,
       (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
     );
 
   const nombre$ = from(nombres);
   nombre$.pipe(map(capitalizar)).subscribe(console.log);
 })();
 