## STR

1. clone the repo
2. `yarn`
3. `cd subrepo`
4. `yarn webpack`

## Expected Behaviour

All the assets are built into the `subrepo/dist` folder

## Actual Behaviour

Files loaded by file-loader correctly end up in dist (e.g. `dist/_/node_modules/slick-carousel/slick/fonts/slick-2630a3e3eab21c607e21576571b95b9d.svg`)

Files loaded as `asset/resource` end up traversing dist into the `subrepo` folder and end up in `subrepo/node-modules` (e.g. `node_modules/slick-carousel/slick/fonts/slick-295183786cd8a1389865..woff`)

