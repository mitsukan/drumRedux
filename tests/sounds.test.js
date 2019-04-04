const sounds = require('../src/sounds.js');

describe('Sounds', () => {
  beforeEach(() => {
    s = new sounds.Sounds;
  });

  it('initialises a howler class', () => {
    expect(s.clap).toBeInstanceOf(Howl);
  });

});
