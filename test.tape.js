var tape = require('tape');

tape('with prefix', function (t) {
    // setup
    $('body').empty();
    $('body').append('<div>').append('<div>');
    // execute
    $('div').nextId('my-prefix');
    // assert
    t.equal($('div').first().prop('id'), 'my-prefix-0');
    t.equal($('div').last().prop('id'), 'my-prefix-1');
    // end
    t.end();
})

tape('without prefix', function (t) {
    // setup
    $('body').empty();
    $('body').append('<span>').append('<span>');
    // execute
    $('span').nextId();
    // assert
    t.equal($('span').first().prop('id'), 'nid-0');
    t.equal($('span').last().prop('id'), 'nid-1');
    // end
    t.end();
})

tape('set default prefix and separator', function (t) {
    // setup
    $('body').empty();
    $('body').append('<p>').append('<p>');
    // execute
    $.fn.nextId.defaults.prefix = 'foo';
    $.fn.nextId.defaults.separator = '_';
    $('p').nextId();
    // assert
    t.equal($('p').first().prop('id'), 'foo_0');
    t.equal($('p').last().prop('id'), 'foo_1');
    // end
    t.end();
})
