# @ebay/jquery-next-id

<p>
    <a href="https://travis-ci.org/ianmcburnie/jquery-next-id"><img src="https://api.travis-ci.org/ianmcburnie/jquery-next-id.svg?branch=master" alt="Build Status" /></a>
    <a href="https://coveralls.io/github/ianmcburnie/jquery-next-id?branch=master"><img src="https://coveralls.io/repos/ianmcburnie/jquery-next-id/badge.svg?branch=master&service=github" alt="Coverage Status" /></a>
</p>

jQuery collection plugin that will assign the next ID in sequence if an ID property does not already exist.

```js
$(collection).nextId([prefix]);
```

## Experimental

This plugin is still in an experimental state, until it reaches v1.0.0 you must consider all minor releases as breaking changes. Patch releases may introduce new features, but will be backwards compatible.

Please use the tilde range specifier in your package.json to pin to a fixed major and minor version.

## Install

```js
npm install @ebay/jquery-next-id --save
```

## Defaults

```js
$.fn.nextId.defaults = {
    prefix : 'nid',
    separator : '-'
};
```

## Example

Input:

```html
<div />
<div />
```

Execute:

```js
$('div').nextId('my-prefix');
```

Output:

```html
<div id="my-prefix-0" />
<div id="my-prefix-1" />
```

## Development

Run `npm start` for test driven development. All tests are located in `test.js`.

Execute `npm run` to view all available CLI scripts:

* `npm start` watches code and re-lints and re-tests after any change
* `npm test` lints code, runs all unit tests & generates reports (see reports section below)
* `npm run lint` lints code and reports to stdout
* `npm run minify` builds minified version of plugin
* `npm run clean` deletes all generated test reports and coverage files

## Reports

Each test run will generate the following reports:

* `jshint.txt` contains JSHint checkstyle report
* `/coverage` contains Istanbul code coverage report
* `/karma_html` contains HTML test report
* `/target` contains JUnit test report

## CI Build

https://travis-ci.org/ianmcburnie/jquery-next-id

## Code Coverage

https://coveralls.io/github/ianmcburnie/jquery-next-id?branch=master
