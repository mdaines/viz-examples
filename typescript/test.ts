import Viz = require("viz.js");
import { Module, render } from "viz.js/lite.js.opaque";

let viz = new Viz({ Module, render });

viz.renderString("digraph { a -> b }")
.then(console.log);
