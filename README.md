# @ebay/jquery-next-id

<a href="https://travis-ci.org/ianmcburnie/jquery-next-id">
<img src="https://api.travis-ci.org/ianmcburnie/jquery-next-id.svg?branch=master" alt="Travis CI build status" /></a>

<a href="https://coveralls.io/github/ianmcburnie/jquery-next-id?branch=master">
<img src="https://s3.amazonaws.com/assets.coveralls.io/badges/coveralls_unknown.svg" alt="Coveralls code coverage" /></a>

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

## Travis CI

https://travis-ci.org/ianmcburnie/jquery-next-id
