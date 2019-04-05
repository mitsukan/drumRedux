const Sounds = require('../src/sounds.js');
const Tempo = require('../src/tempo.js');

describe('Sounds', () => {
  beforeEach(() => {
    s = new Sounds;
  });

  it('initialises the required classes', () => {
    expect(s.clap).toBeInstanceOf(Howl);
    expect(s.tempo).toBeInstanceOf(Tempo);
  });

});
