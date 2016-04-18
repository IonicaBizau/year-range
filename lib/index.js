"use strict";

const year = require("current-year");

/**
 * yearRange
 * Get a human-readable year range.
 *
 * @name yearRange
 * @function
 * @param {Date} date1 The first date.
 * @param {Date} date2 The second date.
 * @returns {String} The year range.
 */
module.exports = function yearRange (date1, date2) {
    let y1 = year(true, date1)
      , y2 = year(true, date2)
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
