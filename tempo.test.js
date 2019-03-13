const tempo = require('./tempo');

jest.useFakeTimers();

describe("tempo", () => {

  it("can toggle a state", () => {
    expect(tempo.toggle(true)).toBe(false);
    expect(tempo.toggle(false)).toBe(true);
  });

  it("can change the state in a score", () => {
    tempo.beat()
    expect(tempo.score).toEqual([true,false,false,false]);
  });

});

describe("play", () => {
  it('can run a timer', () => {
    tempo.play();
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(tempo.beat(), 500);
  });
});
