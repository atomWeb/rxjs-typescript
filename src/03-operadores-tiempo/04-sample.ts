import { fromEvent, interval } from "rxjs";
import { sample } from "rxjs/operators";

// Utiliza tambien dos observables
// Sample emite el ultimo evento cuando el segundo observable emite 

const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

const interval$ = interval(500);
const click$ = fromEvent<PointerEvent>(document, "click");

interval$
  .pipe(
    sample(click$)
  )
  .subscribe(observer)



