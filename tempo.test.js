const tempo = require('./tempo');
const callback = jest.fn();

beforeEach(() => {
  t = new tempo.Tempo;
  jest.useFakeTimers();
  jest.clearAllMocks();
});

describe("Tempo", () => {

  it('initialises with the correct constructors', () => {
    expect(t.score).toEqual([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
    expect(t.bpm).toEqual(120);
    expect(t.msInAMinute).toEqual(60000/4);
    expect(t.note).toEqual(0);
    expect(t.bpm).toEqual(120);
    expect(t.intState).toEqual(undefined);
  });

  it("can toggle a state", () => {
    expect(t.toggle(0)).toBe(true);
    expect(t.toggle(0)).toBe(false);
  });

  it("can change the state in a score", () => {
    t.play(callback);
    expect(callback).not.toBeCalled();
    jest.advanceTimersByTime(125);
    expect(t.score).toEqual([true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 125);
  });


});


// describe("stop", () => {
//   it('can stop the timer function', () => {
//     tempo.stop();
//     expect(clearInterval).toHaveBeenCalledTimes(1);
//   });
//
//   it('resets variables when stop function runs', () => {
//     tempo.play(callback);
//     expect(callback).not.toBeCalled();
//   });
// });
