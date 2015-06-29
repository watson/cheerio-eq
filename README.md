# cheerio-eq

Add `:eq()` selector functionality to [cheerio](https://github.com/cheeriojs/cheerio).

[![build status](https://secure.travis-ci.org/watson/cheerio-eq.png)](http://travis-ci.org/watson/cheerio-eq)

**If you are looking for a more advanced solution with support for
multiple advanved selectors, check out the
[cheerio-advanced-selectors](https://github.com/watson/cheerio-advanced-selectors)
module.**

## What's the problem?

Cheerio sacrifices advanced CSS selector support for speed. This means
for instance that the `:eq()` selector isn't supported. The work-around
is normally to use the `.eq()` function instead:

```js
// this will not work:
$('div:eq(1)');

// use this instead:
$('div').eq(1);
```

This is a good alternative if you write the CSS selectors from scrach,
but what if you are working with selectors that already contain `:eq()`?
**Don't fear, cheerio-eq is here :)**

## Solution

The solution to the problem is to automatically parse the selector
string at run-time. So if you give cheerio-eq a selector like
`div:eq(1)` it will return the following cheerio cursor:
`$('div').eq(1)`.

It also works for complex selectors, so that `div:eq(1) h2:eq(0) span`
will be converted and interpreted as
`$('div').eq(1).find('h2').eq(0).find('span')`.

## Installation

```
npm install cheerio-eq
```

## Usage

```js
var cheerio = require('cheerio');
var find = require('cheerio-eq');

var html = '<div>foo</div><div>bar</div>';
var selector = 'div:eq(1)';

var $ = cheerio.load(html);

console.log(find($, selector).text()); // => 'bar'
```

## API

The cheerio-eq module exposes a single function, which takes 2
arguments:

1. The cheerio DOM object (usually just named `$`)
1. A string containing the selector to parse

## License

MIT
