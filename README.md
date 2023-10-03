**package.json**
[![Known Vulnerabilities](https://snyk.io/test/github/fecgov/fec-pattern-library/badge.svg)](https://snyk.io/test/github/fecgov/fec-pattern-library?targetFile=package.json)

# FEC.gov Pattern Library

This is the collection of styles and design patterns that make up fec.gov. It is built on [Fractal](http://fractal.build/guide).

It is also viewable online at: <https://fec-pattern-library.app.cloud.gov/>

## Installation
Make sure you are on the correct Node.js version (Currently version 18.7.1):
```
nvm use 18.17.1
```

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

### Additional commands

Build SCSS only:

```
npm run build-sass
```

Build JavaScript only:

```
npm run build-js
```

### Debugging

Since the `fec-cms` repository is a dependency to this pattern library, there may be discrepancies between style components that exist in `fec-cms` and what this repository is attempting to import.

If this happens, you may see the following error message in your terminal:
> Error: File to import not found or unreadable: ./node_modules/fec-cms/fec/fec/static/scss/components/[some-component].

> Parent style sheet: […]/fec-pattern-library/static/scss/styles.scss

If this happens, double-check that things you are trying to import in the pattern library actually exist in `fec-cms`.
Look in https://github.com/18F/fec-cms/tree/develop/fec/fec/static/scss/components for the component specified by the error message.
If you don’t find the component there, you can safely remove it from `[…]/fec-pattern-library/static/scss/styles.scss` on your branch, then save and execute `npm run build` again. The error message should no longer appear.

## Front end asset management for components
Component specific SCSS and JavaScript files are contained in the `public/` folder, and compiled files and assets are be served from the `public/` folder.

### fec-cms git dependency
This repo depends on the `fec-cms` git repo as a local npm package to compile and serve front end assets for components to render correctly. Any updates on `fec-cms` since the initial npm install will require `npm update` to get the latest assets into the `node_modules/fec-cms` folder.

### SCSS
The Gulp script (`.gulpfile.js`) compiles custom stylesheet of all icons classes (`_icon-classes.scss`) as well as all components as specified in `static/scss/styles.scss`. Any additional layout or component stylesheets created in `fec-cms` must be added to `styles.scss`.

### JavaScript
Interactive components that rely on JS will need to have their functions intialized in `static/js/init.js`.

### Build icons component for documentation
Update the Icons documentation page by running:

```
npm run build-icons-component
```

This command gets a list of icons and generates HTML markup for the custom documentation component. It uses `static/templates/icons-component.html` as a template to fill in the current list of icons from `fec-cms` into `components/01-basics/_icons.html`.

### "Hack" to get documentation pages to display custom styles
Documentation pages (like `documentation/02-typography.md`) include hardcoded HTML to render hidden components so they can render custom FEC styles. Those components are defined in `components/01-basics/*`.
