import Viz from 'viz.js';
import { Module, render } from 'viz.js/full.render.js';

var viz = new Viz({ Module, render });

viz.renderSVGElement('digraph { a -> b; }')
.then(function(element) {
  document.body.appendChild(element);
});
