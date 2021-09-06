import { fromEvent } from "rxjs";
import { auditTime, map, tap } from "rxjs/operators";

// AuditTime emite el ultimo evento emitido empezando cuando se emite el 
// primer evento, en el ejemplo damos un clic empieza a contar y al finalizr
// los dos segundos emite el ultimo

const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

const click$ = fromEvent<PointerEvent>(document, "click");

click$
  .pipe(
    map(({ x, y }) => ({ x, y })),
    tap(val => console.log("tap", val)),
    auditTime(2000)
  )
  .subscribe(observer)



