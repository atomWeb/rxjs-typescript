import { interval } from "rxjs";
import { take, reduce, tap } from "rxjs/operators";

const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

const totalReducer = (acumulador: number, valorActual: number) => {
  return acumulador + valorActual;
};

interval(1000)
  .pipe(
    take(3), 
    tap(console.log), 
    reduce(totalReducer, 5)
  )
  .subscribe(observer);
