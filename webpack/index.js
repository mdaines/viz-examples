import Viz from 'viz.js';
import worker from 'viz.js/full.js.opaque';

var viz = new Viz({ worker });

viz.renderSVGElement('digraph { a -> b; }')
.then(function(element) {
  document.body.appendChild(element);
});
