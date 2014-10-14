'use strict';

var test = require('tape');
var cheerio = require('cheerio');
var find = require('./');

var html = '<div>foo</div><div>bar</div>';
var selector = 'div:eq(1)';

test('Non-eq selector', function (t) {
  var html = '<div>foo</div><div>bar</div>';
  var $ = cheerio.load(html);
  t.equal(find($, 'div').text(), 'foobar');
  t.end();
});

test('Simple selector ending in :eq()', function (t) {
  var html = '<div>foo</div><div>bar</div>';
  var $ = cheerio.load(html);
  t.equal(find($, 'div:eq(1)').text(), 'bar');
  t.end();
});

test('Simple selector with :eq() in the middle', function (t) {
  var html = '<div><span>foo</span></div><div><span>bar</span></div>';
  var $ = cheerio.load(html);
  t.equal(find($, 'div:eq(0) span').text(), 'foo');
  t.end();
});

test('Complex selector', function (t) {
  var html = '<div><span><h1>foo</h1></span><span><h1>bar</h1></span></div>';
  var $ = cheerio.load(html);
  t.equal(find($, 'div:eq(0) span:eq(1) h1').text(), 'bar');
  t.end();
});
