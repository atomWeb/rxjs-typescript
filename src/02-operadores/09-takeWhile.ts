import { fromEvent } from "rxjs";
import { takeWhile, map } from "rxjs/operators";

const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

const click$ = fromEvent<PointerEvent>(document, "click");


click$
  .pipe(
    map(({ x, y }) => ({ x, y })),
    // takeWhile(({ y }) => y <= 150)
    takeWhile(({ y }) => y <= 150, true) //emite tambien la que rompe la condicion
  )
  .subscribe(observer);