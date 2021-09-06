import { of, from } from "rxjs";

/**
 * of = toma argumentos y genera una secuencia
 * from = array, promise, iterablem, observable
 */

const observer = {
  next: (val) => console.log(val),
  complete: () => console.log("complete"),
};

// const source$ = from([1, 2, 3, 4, 5]);
// const source$ = of([1, 2, 3, 4, 5]);
// const source$ = from("cristian");
const source$ = from(fetch("https://api.github.com/users/klerith"));

// source$.subscribe(observer);
source$.subscribe(async (response) => {
  const data = await response.json();
  console.log(data);
});

const miGenerador = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const miIterable = miGenerador();

from(miIterable).subscribe(observer);
