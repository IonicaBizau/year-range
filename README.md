
# year-range

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Travis](https://img.shields.io/travis/IonicaBizau/year-range.svg)](https://travis-ci.org/IonicaBizau/year-range/) [![Version](https://img.shields.io/npm/v/year-range.svg)](https://www.npmjs.com/package/year-range) [![Downloads](https://img.shields.io/npm/dt/year-range.svg)](https://www.npmjs.com/package/year-range)

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

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


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


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`blah`](https://github.com/IonicaBizau/blah)—A command line tool to optimize the repetitive actions.
 - [`showalicense.com`](https://github.com/IonicaBizau/showalicense.com#readme)—A site to provide an easy way to show licenses and their human-readable explanations.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
