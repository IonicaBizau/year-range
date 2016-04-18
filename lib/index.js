"use strict";

const year = require("current-year");

/**
 * yearRange
 * Get a human-readable year range.
 *
 * @name yearRange
 * @function
 * @param {Number|Date} date1 The first date or the year.
 * @param {Number|Date} date2 The second date or the year.
 * @returns {String} The year range.
 */
module.exports = function yearRange (date1, date2) {
    let getY = x => typeof x === "number" ? x.toString() : year(true, x)
      , y1 = getY(date1)
      , y2 = getY(date2)
      ;

    if (y1 === y2) {
        return y1;
    }

    let p1 = y1.slice(0, -2)
      , p2 = y2.slice(0, -2)
      ;

    if (p1 === p2) {
        return y1 + "-" + y2.substr(2);
    }

    return y1 + "-" + y2;
};
