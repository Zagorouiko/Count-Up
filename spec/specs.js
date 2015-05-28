describe("countsUp", function() {
  it("takes an integer, and counts up from that integer, starting with 1", function() {
    expect(countsUp(10)).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  });

  it("takes an integer, and outputs every multiple up to that limit", function() {
    expect(countsUpBy(10, 2)).to.eql([2, 4, 6, 8, 10])
  })
});
