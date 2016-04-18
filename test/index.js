"use strict";

const tester = require("tester")
    , yearRange = require("..")
    ;

tester.describe("year range", t => {
    t.it("one year", () => {
        t.expect(yearRange()).toBe(new Date().getFullYear().toString());
    });
    t.should("range in same millenium", () => {
        let d1 = new Date(2014, 0, 1);

        // TODO: Yeah, this will fail in 3000
        t.expect(yearRange(d1)).toBe("2014-" + new Date().getFullYear().toString().substring(2));

        let d2 = new Date(2015, 0, 1);
        t.expect(yearRange(d1, d2)).toBe("2014-15");
    });
    t.should("range in different milleniums", () => {
        let d1 = new Date(1995, 0, 1);
        t.expect(yearRange(d1)).toBe("1995-" + new Date().getFullYear().toString());

        let d2 = new Date(2015, 0, 1);
        t.expect(yearRange(d1, d2)).toBe("1995-2015");
    });
});
