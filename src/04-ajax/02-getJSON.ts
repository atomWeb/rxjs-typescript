import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { map, pluck, catchError } from "rxjs/operators";

const url = "https://httpbin.org/delay/1";

const atrapaError = (err: AjaxError) => {
  // Retorna un error u otro observable
  console.warn("Error en: ", err.message);
  return of([]);
};

const headers = {
  "Content-Type": "application/json",
  "my-token": "ABCDE18676"
}

const obs$ = ajax.getJSON(url, headers);
obs$.subscribe(console.log);

// ajax(url)
//   .pipe(
//     // map(resp => resp.response) // lo mismo:
//     pluck("response"),
//     catchError(atrapaError)
//   )
//   .subscribe(console.log);
