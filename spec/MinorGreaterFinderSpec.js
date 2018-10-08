describe("MinorGreaterFinder", function() {
    it ("should receive numbers in a non-sequential way", function() {
        var test = new MinorGreaterFinder();
        test.feed([2, 15, 25, 89, 5, 1]);

        expect(test.getMinor()).toEqual(1);
        expect(test.getGreater()).toEqual(89);
    });
});