import { asyncScheduler, observeOn, of, range } from "rxjs";

// const src$ = of(1, 2, 3, 4, 5);
// Asi me sale deprecado:
//const src$ = range(1, 5, asyncScheduler);

const src$ = range(1, 5).pipe(observeOn(asyncScheduler))

console.log("inicio");
const subs = src$.subscribe(console.log);
console.log("fin");