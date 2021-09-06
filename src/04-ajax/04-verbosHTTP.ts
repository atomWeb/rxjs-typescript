import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { map, pluck, catchError } from "rxjs/operators";

const url = "https://httpbin.org/delay/1";

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

const body = {
  id: 1,
  nombre: "cristian"
}


// ajax.get / ajax.delete / ajax.put 
// ajax.post(url, body, headers)
//   .subscribe(console.log)

// Tambien:
ajax({
  url: url,
  method: "POST",
  headers: headers,
  body: body,
}).subscribe(console.log);




