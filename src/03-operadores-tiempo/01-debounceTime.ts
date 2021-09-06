import { fromEvent } from "rxjs";
import { debounceTime, distinctUntilChanged, pluck } from "rxjs/operators";

const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

const click$ = fromEvent<PointerEvent>(document, "click");


click$
  .pipe(
    debounceTime(1000)
  )
  .subscribe(observer);

//
const input = document.createElement("input");
// document.querySelector("body").append(input); // Tambien
document.body.appendChild(input);

const input$ = fromEvent<KeyboardEvent>(document, "keyup");
input$
  .pipe(
    debounceTime(1000),
    pluck("target", "value"),
    distinctUntilChanged()
  )  
  .subscribe(observer)
