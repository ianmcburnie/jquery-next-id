/**
* @function jquery.nextid.js
* @version 0.0.8
* @author Ian McBurnie <ianmcburnie@hotmail.com>
* @desc jQuery collection plugin that will assign the next ID in sequence if an
* ID property does not already exist.
* @param {string} prefix The ID will be prefixed with this value. The default,
* is 'nid'.
*/
(function ($, window, document, undefined) {
    var _nextInSequenceMap = {};

    $.fn.nextId = function nextId(prefix) {
        prefix = prefix || $.fn.nextId.defaults.prefix;

        // initialise prefix in sequence map if necessary
        _nextInSequenceMap[prefix] = (_nextInSequenceMap[prefix] === undefined) ? 0 : _nextInSequenceMap[prefix];

        return this.filter(function onFilter(){
            return !this.id;
        })
        .each(function onEach() {
            var $this = $(this);
            $this.prop('id', prefix + $.fn.nextId.defaults.separator + _nextInSequenceMap[prefix]++);
        });
    };

}(jQuery, window, document));

$.fn.nextId.defaults = {
    prefix : 'nid',
    separator : '-'
};
