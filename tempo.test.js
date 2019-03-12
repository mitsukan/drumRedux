const tempo = require('./tempo');

it("can toggle a state", () => {
  expect(tempo.toggle(true)).toBe(false);
  expect(tempo.toggle(false)).toBe(true);
});
