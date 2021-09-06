import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { map, pluck, catchError } from "rxjs/operators";

const url = "https://api.github.com/users?per_page=5";

const manejaErrores = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

const atrapaError = (err: AjaxError) => {
  // Retorna un error u otro observable
  console.warn("Error en: ", err.message);
  return of([]);
};

// const fetchPromise = fetch(url);

// fetchPromise
//   .then( manejaErrores )
//   .then((resp) => resp.json())
//   .then(console.log)
//   .catch(err => console.warn("error en usuarios ", err));

ajax(url)
  .pipe(
    // map(resp => resp.response) // lo mismo:
    pluck("response"),
    catchError(atrapaError)
  )
  .subscribe(console.log);
