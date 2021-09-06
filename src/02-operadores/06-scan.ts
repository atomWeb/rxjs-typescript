import { from } from "rxjs";
import { scan, reduce, map } from "rxjs/operators";

const numeros = [1, 2, 3, 4, 5];

const totalAcumulador = (acc: number, cur: number) => acc + cur;

// Reduce
from(numeros)
  .pipe(
    reduce(totalAcumulador, 0)
).subscribe(console.log)

// Scan
from(numeros)
  .pipe(
    scan(totalAcumulador, 0)
).subscribe(console.log)

// Algo parecido al patrón Redux
interface Usuario {
  id?: string;
  autenticado?: boolean;
  token?: string;
  edad?: number;
}

const users: Usuario[] = [
  { id: "cpg", autenticado: false, token: null },
  { id: "cpg", autenticado: true, token: "ABC" },
  { id: "cpg", autenticado: true, token: "ABC123" },
];

const state$ = from(users).pipe(
  scan<Usuario>(
    (acc: any, cur:any) => {
      return { ...acc, ...cur }
    } //, {edad: 33} Imposible ponerle valor inicial 
  )
);

const id$ = state$.pipe(
  map(state => state)
);

id$.subscribe(console.log)