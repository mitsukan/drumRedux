const tempo = require('./tempo');

describe("tempo", () => {

  it("can toggle a state", () => {
    expect(tempo.toggle(true)).toBe(false);
    expect(tempo.toggle(false)).toBe(true);
  });

  it("can change the state in a sheet", () => {
    tempo.beat()
    expect(tempo.score).toBe([true,false,false,false]);
  });
});
