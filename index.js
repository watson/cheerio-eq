'use strict';

var regex = /^(.*?)(?:\:eq\((\d+)\))(.*)/;

module.exports = function ($, selector) {
  var parts = [];
  var match;

  while (match = selector.match(regex)) {
    parts.push(match[1]);
    parts.push(parseInt(match[2], 10));
    selector = match[3].trim();
  }
  parts.push(selector);

  var cursor = $(parts.shift());
  parts
    .filter(function (selector) {
      return selector !== '';
    })
    .forEach(function (selector) {
      cursor = typeof selector === 'number' ? cursor.eq(selector) : cursor.find(selector);
    });

  return cursor;
};
