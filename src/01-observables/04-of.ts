import { Observer, of } from "rxjs";

// const obs$ = of(0, 1, 2, 3, 4, 5, 6);
// Asi sale deprecado
// const obs$ = of<number>(...[0, 1, 2, 3, 4, 5, 6], 2, 3, 4, 5, 6);
const obs$ = of(...[0, 1, 2, 3, 4, 5, 6], 2, 3, 4, 5, 6);
// const obs$ = of(
//   [0, 1, 2],
//   { a: 1, b: 2 },
//   function () {},
//   true,
//   Promise.resolve(true)
// );

const observer: Observer<any> = {
  next: (value) => console.log("next: ", value),
  error: null,
  complete: () => console.info("secuencia terminada"),
};

obs$.subscribe(observer);
