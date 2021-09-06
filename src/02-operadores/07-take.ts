import { of } from "rxjs" 
import { take, tap } from "rxjs/operators" 

const numeros$ = of(1,2,3,4,5,6)

const observer = {
    next: (val) => console.log("next", val),
    complete: () => console.log("complete"),
  };

numeros$
.pipe(
    tap(console.log),
    take(3)
)
.subscribe(observer)