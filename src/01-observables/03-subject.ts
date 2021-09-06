import { Observable, Observer, Subject, Subscription } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next: ", value),
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("completado"),
};

const intervalo$ = new Observable<number>((subs) => {
  const intervalId = setInterval(() => subs.next(Math.random()), 1000);

  return () => {
    clearInterval(intervalId)
    console.log("Intervalo destruido")
  };
});

/**
 * 1- Casteo múltiple: mismo valor a todos los suscritos a el
 * 2 - También es un observer como el definido arriba, lo que nos permite ponerlo como argumento al Subscribe
 * 3 - Next, error y complete
 */
const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

// Emite un rnd diferente para cada uno
// const subs1 = intervalo$.subscribe(console.log)
// const subs2 = intervalo$.subscribe(console.log)
// const subs1 = intervalo$.subscribe(rnd => console.log('subs1', rnd));
// const subs2 = intervalo$.subscribe(rnd => console.log('subs2', rnd))

// Emite el mismo valor random para ambos
const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  subscription.unsubscribe(); // Para que ejecute el return y lo destruya
}, 3500);
