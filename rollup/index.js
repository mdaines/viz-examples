import Viz from 'viz.js';
import workerURL from 'viz.js/full.render.js';

var viz = new Viz({ workerURL });

viz.renderSVGElement('digraph { a -> b; }')
.then(function(element) {
  document.body.appendChild(element);
});
