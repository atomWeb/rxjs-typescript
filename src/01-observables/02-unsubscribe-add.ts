import { Observable, Observer, Subscription } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next: ", value),
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("completado"),
};

const intervalo$ = new Observable<number>((subscriber) => {
  // Crear contador 1,2,3...
  let count = 0;
  const interval = setInterval(() => {
    // Cada segundo
    count++;
    subscriber.next(count);
  }, 1000);

  setTimeout(() => {
    subscriber.complete();
  }, 2500)

  return () => {
    clearInterval(interval);
    console.log("Intervalo destruido");
  };
});

const subs1: Subscription = intervalo$.subscribe(observer);
const subs2: Subscription = intervalo$.subscribe(observer);
const subs3: Subscription = intervalo$.subscribe(observer);

// Puedo desuscribirme con: subs.unsubscribe(); Pero el oservable sigue emitiendo
// Para hacer que el intervalo deje de emitir, metemos el codigo del return
// Asi cuando se hace el unsubscribe deja de emitir (porque lo estamos cerrando vamos)


subs1.add(subs2.add(subs3));

setTimeout(() => {
  subs1.unsubscribe();
  // subs2.unsubscribe();
  // subs3.unsubscribe();


  console.log("Completado timeout")
}, 6000);
