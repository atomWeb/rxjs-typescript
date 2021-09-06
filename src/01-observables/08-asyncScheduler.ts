import { asyncScheduler } from "rxjs"; // No devuelve un Observable sino un Subscribe

const saludar = () => console.log("saludar");
const saludar2 = (nombre) => console.log(`saludar ${nombre}`);

// asyncScheduler.schedule(saludar, 2000);
// asyncScheduler.schedule(saludar2, 2000, "cristian"); // El argumento debe ser uno, un objeto por ejemplo

// Despues de 2 seg ejecuta cada segudo lo del this.sche....
const subs = asyncScheduler.schedule(
  function (state) {
    console.log("state", state);
    this.schedule(state + 1, 1000);
  },
  2000,
  0
);

// Esto va bien pero vamos a hacerlo con el scheduler
// setTimeout(() => {
//   subs.unsubscribe();
// }, 5000);

asyncScheduler.schedule(() => subs.unsubscribe(), 5000);
