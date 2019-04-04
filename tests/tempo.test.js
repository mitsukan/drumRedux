const tempo = require('../src/tempo.js');
const callback = jest.fn();



describe("Tempo", () => {

  beforeEach(() => {
    t = new tempo.Tempo;
    jest.useFakeTimers();
    jest.clearAllMocks();
  });

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

  it("can iterate through the score index", () => {
    t.play(callback);
    expect(callback).not.toBeCalled();
    jest.advanceTimersByTime(125);
    expect(t.note).toEqual(1);
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 125);
  });

  it('can loop back to 0 after hitting 15', () => {
    t.play(callback);
    expect(callback).not.toBeCalled();
    expect(t.note).toEqual(0);
    jest.advanceTimersByTime(1875);
    expect(t.note).toEqual(15);
    jest.advanceTimersByTime(125);
    expect(t.note).toEqual(0);
  });

  it('can stop the interval function', () => {
    t.stop();
    expect(clearInterval).toHaveBeenCalledTimes(1);
    expect(clearInterval).toHaveBeenLastCalledWith(t.intState);
  });


});



//
//   it('resets variables when stop function runs', () => {
//     tempo.play(callback);
//     expect(callback).not.toBeCalled();
//   });
// });
