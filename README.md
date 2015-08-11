# jquery-next-id

jQuery collection plugin that will assign the next ID in sequence if an ID property does not already exist.

## Usage

```js
$(collection).nextId([prefix]);
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
<span />
<span />
<p />
<p />

*/ with prefix */
$('div').nextId('my-prefix');

*/ without prefix */
$('span').nextId();

*/ overriding default prefix and separator */
$.fn.nextId.defaults.prefix = 'foo';
$.fn.nextId.defaults.separator = '_';
$('p').nextId();
```

Output:

```html
<div id="my-prefix-0" />
<div id="my-prefix-1" />
<span id="nid-0" />
<span id="nid-1" />
<p id="foo_0" />
<p id="foo_1" />
```
