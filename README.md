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

## CI Build

https://travis-ci.org/ianmcburnie/jquery-next-id

## Code Coverage

https://coveralls.io/github/ianmcburnie/jquery-next-id?branch=master
