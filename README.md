
# year-range [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Travis](https://img.shields.io/travis/IonicaBizau/year-range.svg)](https://travis-ci.org/IonicaBizau/year-range/) [![Version](https://img.shields.io/npm/v/year-range.svg)](https://www.npmjs.com/package/year-range) [![Downloads](https://img.shields.io/npm/dt/year-range.svg)](https://www.npmjs.com/package/year-range) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Get a human-readable year range.

## :cloud: Installation

```sh
$ npm i --save year-range
```


## :clipboard: Example



```js
const yearRange = require("year-range");

console.log(yearRange());
// => "2016"

console.log(yearRange(new Date(2014, 0, 1)));
// => "2014-16"

console.log(yearRange(new Date(2014, 0, 1)), 2016);
// => "2014-16 2016"

console.log(yearRange(1995, 2014));
// => "1995-2014"
```

## :memo: Documentation


### `yearRange(date1, date2)`
Get a human-readable year range.

#### Params
- **Number|Date** `date1`: The first date or the year.
- **Number|Date** `date2`: The second date or the year.

#### Return
- **String** The year range.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`blah`](https://github.com/IonicaBizau/blah)—A command line tool to optimize the repetitive actions.
 - [`showalicense.com`](https://github.com/IonicaBizau/showalicense.com#readme)—A site to provide an easy way to show licenses and their human-readable explanations.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
