// const nombre: string = "Cristian";
// console.log(`Hola mundo ${nombre}`);
import { Observable, Observer } from "rxjs";

const observer: Observer<string> = {
  next: (value) => console.log("next: ", value),
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("completado "),
};

const obs$ = new Observable<string>((subs) => {
  subs.next("Hola"); // Emite
  subs.next("Mundo");
  subs.next("Hola");
  subs.next("Mundo");
  subs.next("Hola");

  // Forzar un error JS (no TS)
  //    const a = undefined;
  //    a.nombre = "CPG"

  subs.complete(); // Termina de emitir
});

// obs$.subscribe((resp) => console.log(resp));  esto es igual a lo siguiente:
// obs$.subscribe(console.log);

// deprecated
// obs$.subscribe(
//   (valor) => console.log("next: ", valor),
//   (error) => console.warn("error: ", error),
//   () => console.log("Completado ")
// );

obs$.subscribe(observer);
