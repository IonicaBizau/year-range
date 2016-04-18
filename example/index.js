"use strict";

const yearRange = require("../lib");

console.log(yearRange());
// => "2016"

console.log(yearRange(new Date(2014, 0, 1)));
// => "2014-16"

console.log(yearRange(new Date(2014, 0, 1)), 2016);
// => "2014-16 2016"

console.log(yearRange(1995, 2014));
// => "1995-2014"
