const tempo = require('./tempo');
jest.useFakeTimers();
const callback = jest.fn();

describe("tempo", () => {

  it("can toggle a state", () => {
    expect(tempo.toggle(true)).toBe(false);
    expect(tempo.toggle(false)).toBe(true);
  });

  it("can change the state in a score", () => {
    tempo.play(callback);
    expect(callback).not.toBeCalled();
    jest.advanceTimersByTime(500);
    expect(tempo.score).toEqual([true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 500);
    jest.advanceTimersByTime(500);
    expect(tempo.score).toEqual([false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
    jest.advanceTimersByTime(7500);
    expect(tempo.score).toEqual([true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
  });

});


describe("stop", () => {
  it('can stop the timer function', () => {
    tempo.stop();
    expect(clearInterval).toHaveBeenCalledTimes(1);
  });
});
