import { fromEvent, asyncScheduler } from "rxjs";
import { sampleTime, map } from "rxjs/operators";

// Sample time emite el ultimo evento al terminar el perido de tiempo establecido

const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

const click$ = fromEvent<PointerEvent>(document, "click");

click$
  .pipe(
    sampleTime(2000), // Es un poco mas eficiente colocarlo aqui arriba
    map(({ x, y }) => ({ x, y })))
  .subscribe(observer);


