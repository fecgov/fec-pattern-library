# FEC.gov Pattern Library

This is the collection of styles and design patterns that make up fec.gov. It is built on [Fractal](http://fractal.build/guide).

It is also viewable online at: <https://fec-pattern-library.app.cloud.gov/>

## Installation

Install dependencies:

```
npm install
```

Build the project

```
npm run build
```

Start the server

```
npm run start
```

## Front end asset management for components

### CSS
Remove the existing file `/public/css/styles.css`. Then from the [fec-cms](github.com/18F/fec-cms) repo, run `npm run build-sass` and get the generated `/fec/fec/dist/fec/static/css/all-*.css` file. Drop it in `/public/css/` folder and rename to `styles.css`.

### Images and fonts
Drop in any images and fonts needed for components in `/public/img` and `/public/fonts`, respectively.

### JavaScript
Custom JS functions are defined in `/public/init.js`. They are compiled during the `npm run build` step.
