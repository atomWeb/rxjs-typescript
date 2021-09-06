import { fromEvent, interval } from "rxjs";
import { takeUntil, skip } from "rxjs/operators";

// takeUntil utiliza dos Observers y se completa cuando 
// El segundo de ellos emite su primer valor.
// Por ejemplo tenemos un interval emitiendo y ccuando por ejemplo se emita un click completar.

const boton = document.createElement("button")
boton.innerHTML = "Detener Timer"
document.querySelector("body").append(boton);


const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

const conuter$ = interval(1000);
const clickBtn$ = fromEvent<PointerEvent>(boton, "click").pipe(
  skip(1) // Se salta una emisión y a la segunda ya emite
  // Ojo se encadenamos otro operador despues del skip solo se ejecutara cuando el skip se termine
)

conuter$
  .pipe(
    takeUntil(clickBtn$)
  )
  .subscribe(observer);
