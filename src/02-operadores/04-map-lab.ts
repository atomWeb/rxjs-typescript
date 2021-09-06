import { range, from, fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement("div");

texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod imperdiet nibh sed pellentesque. Mauris in viverra mauris. Sed consectetur fringilla justo at sagittis. Fusce eget mi quis justo commodo volutpat gravida et tellus. Phasellus facilisis quam at rhoncus viverra. Pellentesque dapibus euismod elementum. Cras quis purus cursus, vehicula est ac, pulvinar urna. Quisque ultricies leo non lectus viverra, ac porta orci tempus. Ut finibus gravida laoreet. Sed sit amet mi sed nisi mattis lacinia id et nunc. Etiam rhoncus ligula eget auctor ultrices.
<br/><br/>
Sed in ornare nisl. Vivamus velit enim, interdum in malesuada eget, efficitur vel augue. Proin auctor at turpis id tempus. Proin mollis euismod augue a ultrices. Morbi dignissim neque orci, fermentum posuere purus dapibus vel. In et metus gravida, viverra odio non, tempus odio. Sed rutrum sit amet diam sed tristique. Phasellus porttitor arcu et dui blandit pulvinar. Maecenas vitae lobortis ex. Ut arcu lacus, lacinia et urna et, aliquet eleifend quam. Donec luctus arcu sed dolor tincidunt, faucibus pellentesque mi vulputate. Vivamus vel luctus lacus, nec lobortis urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus bibendum felis a purus eleifend, non volutpat felis fermentum. Donec nibh quam, mattis at vulputate et, rutrum id nulla. Praesent eleifend nulla at ullamcorper dictum.
<br/><br/>
Curabitur augue sem, pellentesque vitae velit eget, tincidunt volutpat risus. Ut ac libero viverra, aliquam ipsum ut, elementum neque. Donec id leo eget enim aliquet tristique id sit amet est. Phasellus blandit arcu blandit, commodo ex in, aliquet ipsum. Aliquam congue, massa ut pulvinar mattis, lacus ex suscipit nulla, sit amet eleifend turpis tortor vel sapien. In viverra ipsum eu nulla suscipit consequat. Nulla in nunc tempor, laoreet lacus sed, viverra lorem. Donec neque ex, commodo efficitur rutrum porttitor, lacinia vel eros. Etiam eget aliquet quam, eget condimentum risus. Morbi in leo congue, finibus urna vitae, sagittis lorem.
<br/><br/>
Fusce ultricies mi eget nunc tincidunt, quis tincidunt tellus volutpat. Cras condimentum ligula massa, id tincidunt nibh malesuada id. Ut eu augue sagittis, convallis mauris vestibulum, commodo odio. Nulla pharetra eleifend accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque semper vehicula magna in consectetur. Cras interdum purus ante, et mollis felis convallis eu. Donec quis turpis porta, varius turpis eu, blandit tortor. Proin dapibus, ipsum at elementum lacinia, dolor justo ultrices urna, ut imperdiet enim neque ac sem. Quisque elementum sed lacus quis laoreet. Quisque semper nisl vestibulum, hendrerit nibh ac, euismod lacus. Nulla elementum, velit nec venenatis viverra, diam ipsum tincidunt lectus, non pharetra leo enim quis leo. 
<br/><br/><br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod imperdiet nibh sed pellentesque. Mauris in viverra mauris. Sed consectetur fringilla justo at sagittis. Fusce eget mi quis justo commodo volutpat gravida et tellus. Phasellus facilisis quam at rhoncus viverra. Pellentesque dapibus euismod elementum. Cras quis purus cursus, vehicula est ac, pulvinar urna. Quisque ultricies leo non lectus viverra, ac porta orci tempus. Ut finibus gravida laoreet. Sed sit amet mi sed nisi mattis lacinia id et nunc. Etiam rhoncus ligula eget auctor ultrices.
<br/><br/>
Sed in ornare nisl. Vivamus velit enim, interdum in malesuada eget, efficitur vel augue. Proin auctor at turpis id tempus. Proin mollis euismod augue a ultrices. Morbi dignissim neque orci, fermentum posuere purus dapibus vel. In et metus gravida, viverra odio non, tempus odio. Sed rutrum sit amet diam sed tristique. Phasellus porttitor arcu et dui blandit pulvinar. Maecenas vitae lobortis ex. Ut arcu lacus, lacinia et urna et, aliquet eleifend quam. Donec luctus arcu sed dolor tincidunt, faucibus pellentesque mi vulputate. Vivamus vel luctus lacus, nec lobortis urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus bibendum felis a purus eleifend, non volutpat felis fermentum. Donec nibh quam, mattis at vulputate et, rutrum id nulla. Praesent eleifend nulla at ullamcorper dictum.
<br/><br/>
Curabitur augue sem, pellentesque vitae velit eget, tincidunt volutpat risus. Ut ac libero viverra, aliquam ipsum ut, elementum neque. Donec id leo eget enim aliquet tristique id sit amet est. Phasellus blandit arcu blandit, commodo ex in, aliquet ipsum. Aliquam congue, massa ut pulvinar mattis, lacus ex suscipit nulla, sit amet eleifend turpis tortor vel sapien. In viverra ipsum eu nulla suscipit consequat. Nulla in nunc tempor, laoreet lacus sed, viverra lorem. Donec neque ex, commodo efficitur rutrum porttitor, lacinia vel eros. Etiam eget aliquet quam, eget condimentum risus. Morbi in leo congue, finibus urna vitae, sagittis lorem.
<br/><br/>
Fusce ultricies mi eget nunc tincidunt, quis tincidunt tellus volutpat. Cras condimentum ligula massa, id tincidunt nibh malesuada id. Ut eu augue sagittis, convallis mauris vestibulum, commodo odio. Nulla pharetra eleifend accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque semper vehicula magna in consectetur. Cras interdum purus ante, et mollis felis convallis eu. Donec quis turpis porta, varius turpis eu, blandit tortor. Proin dapibus, ipsum at elementum lacinia, dolor justo ultrices urna, ut imperdiet enim neque ac sem. Quisque elementum sed lacus quis laoreet. Quisque semper nisl vestibulum, hendrerit nibh ac, euismod lacus. Nulla elementum, velit nec venenatis viverra, diam ipsum tincidunt lectus, non pharetra leo enim quis leo. 
`;

const body = document.querySelector("body");
body.append(texto);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");
body.append(progressBar);

// Streams de la pagina
const scroll$ = fromEvent(document, "scroll");

//
const calcularPorcScroll = (event) => {
  const { clientHeight, scrollHeight, scrollTop } = event.target.documentElement;
  return ( scrollTop / (scrollHeight - clientHeight) ) * 100;
}
//
const progress$ = scroll$.pipe(
  map(event => calcularPorcScroll(event)),
  tap(console.log)
);

progress$.subscribe((porcentaje) => {
  progressBar.style.width = `${porcentaje}%`;
});
