import { interval, timer } from "rxjs";

const observer = {
  next: (value) => console.log("next: ", value),  
  complete: () => console.info("secuencia terminada")
};

const ahoraEn5 = new Date();
ahoraEn5.setSeconds(ahoraEn5.getSeconds() + 5);

const interval$ = interval(1000)
// const timer$ = timer(2000)
const timer$ = timer(ahoraEn5);

console.log("inicio")
// interval$.subscribe(observer)
timer$.subscribe(observer)
console.log("fin")