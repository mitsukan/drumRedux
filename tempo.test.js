const tempo = require('./tempo');
const callback = jest.fn();

beforeEach(() => {
  jest.useFakeTimers();
  jest.clearAllMocks();
});

describe("tempo", () => {

  it("can toggle a state", () => {
    expect(tempo.toggle(true)).toBe(false);
    expect(tempo.toggle(false)).toBe(true);
  });

  it("can change the state in a score", () => {
    tempo.play(callback);
    expect(callback).not.toBeCalled();
    jest.advanceTimersByTime(125);
    expect(tempo.score).toEqual([true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 125);
    jest.advanceTimersByTime(125);
    expect(tempo.score).toEqual([false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
    jest.advanceTimersByTime(1875);
    expect(tempo.score).toEqual([true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
  });

});


describe("stop", () => {
  it('can stop the timer function', () => {
    tempo.stop();
    expect(clearInterval).toHaveBeenCalledTimes(1);
  });
});
