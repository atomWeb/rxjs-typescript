import { fromEvent, range } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";

// range(1, 5)
//   .pipe(map<number, string>((val) => (val * 10).toString()))
//   .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");

keyup$.pipe(map((event) => event.code)).subscribe(console.log);


const keyupPluck$ = keyup$.pipe(
 // pluck("key")
 pluck("target", "baseURI")
).subscribe(console.log);

const keyupMapTo= keyup$.pipe(
  mapTo("tecla presionada")
).subscribe(console.log);