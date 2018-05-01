import Viz from 'viz.js';
import worker from 'viz.js/full.js.opaque';

let viz = new Viz({ worker });

viz.renderSVGElement('digraph { a -> b; }')
.then(element => {
  document.body.appendChild(element);
});
