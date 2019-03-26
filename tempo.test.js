const tempo = require('./tempo');
const callback = jest.fn();

beforeEach(() => {
  t = new tempo.Tempo;
  jest.useFakeTimers();
  jest.clearAllMocks();
});

describe("tempo", () => {

  it("can toggle a state", () => {
    expect(t.toggle(true)).toBe(false);
    expect(t.toggle(false)).toBe(true);
  });

  // it("can change the state in a score", () => {
  //   tempo.play(callback);
  //   expect(callback).not.toBeCalled();
  //   jest.advanceTimersByTime(125);
  //   expect(tempo.score).toEqual([true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
  //   expect(setInterval).toHaveBeenCalledTimes(1);
  //   expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 125);
  // });


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
