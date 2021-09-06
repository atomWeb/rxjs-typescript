import { fromEvent, asyncScheduler } from "rxjs";
import { throttleTime , distinctUntilChanged, pluck } from "rxjs/operators";

const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

// const click$ = fromEvent<PointerEvent>(document, "click");

// click$
//   .pipe(
//     throttleTime(3000)
//   )
//   .subscribe(observer);

//
const input = document.createElement("input");
document.querySelector("body").append(input); // Tambien

const input$ = fromEvent<KeyboardEvent>(document, "keyup");

// input$
//   .pipe(
//     throttleTime(1000),
//     pluck("target", "value"),
//     distinctUntilChanged()
//   )  
//   .subscribe(observer)

  input$
  .pipe(
    throttleTime(1000, asyncScheduler, { 
      leading: true,
      trailing: true
    }),
    pluck("target", "value"),
    distinctUntilChanged()
  )  
  .subscribe(observer)