# Viz.js Examples

## Rollup

Viz.js using a Web Worker, bundled with Rollup.

    cd rollup
    yarn install
    yarn build

Then serve the `rollup/dist` directory over HTTP.

## Rollup (No Worker)

Viz.js using a Web Worker, bundled with Rollup.

    cd rollup-no-worker
    yarn install
    yarn build

Then serve the `rollup/dist` directory over HTTP.

## Script Tag

Viz.js with and without using a Web Worker.

    cd script-tag
    yarn install

For the `worker.html` example, make sure the `script-tag` directory is served over HTTP.

## Webpack

Viz.js using a Web Worker, bundled with Webpack.

    cd webpack
    yarn install
    yarn build

Then serve the `webpack/dist` directory over HTTP.

## Webpack (No Worker)

Viz.js without using a Web Worker, bundled with Webpack.

    cd webpack-same-context
    yarn install
    yarn build

Then serve the `webpack/dist` directory over HTTP.
