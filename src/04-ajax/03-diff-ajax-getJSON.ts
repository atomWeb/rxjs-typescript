import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { map, pluck, catchError } from "rxjs/operators";

const url = "https://httpbinX.org/delay/1";

const atrapaError = (err: AjaxError) => {
  console.warn("Error en: ", err.message);
  return of({
    ok: false,
    usuarios: [],
  });
};

const headers = {
  "Content-Type": "application/json",
  "my-token": "ABCDE18676",
};

const observer = {
  next: (val) => console.log("next", val),
  error: err => console.warn("Error en subs:", err),
  complete: () => console.log("complete"),
};

// const obs$ = ajax.getJSON(url, headers).pipe(catchError(atrapaError));
// const obs2$ = ajax(url).pipe(catchError(atrapaError));
// obs$.subscribe((data) => console.log("getJSON: ", data));
// obs2$.subscribe((data) => console.log("ajax: ", data));


const obs$ = ajax.getJSON(url, headers)

obs$
  .pipe(catchError(atrapaError))
  .subscribe(observer);

