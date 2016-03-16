/**
* @name jquery-next-id
* @function $.fn.nextId
* @version 0.0.16
* @author Ian McBurnie <ianmcburnie@hotmail.com>
* @desc jQuery collection plugin that will assign the next id in sequence if an
* id property does not already exist.
* @param {string} prefix The id will be prefixed with this value (default: nid)
*/
(function ($, window, document, undefined) {
    var _nextInSequenceMap = {};

    $.fn.nextId = function nextId(prefix) {
        prefix = prefix || $.fn.nextId.defaults.prefix;

        // initialise prefix in sequence map if necessary
        _nextInSequenceMap[prefix] = _nextInSequenceMap[prefix] || 0;

        return this.filter(function onFilter() {
            return !this.id;
        })
        .each(function onEach() {
            $(this).prop('id', prefix + $.fn.nextId.defaults.separator + _nextInSequenceMap[prefix]++);
        });
    };

}(jQuery, window, document));

$.fn.nextId.defaults = {
    prefix: 'nid',
    separator: '-'
};
