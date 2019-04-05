const {Howl, Howler} = require('howler');
const Tempo = require('./tempo.js');

class Sounds{
  constructor(clap, tempo) {
    this.clap = new Howl({src: ['./audio/clap-0.4441ms.mp3']});
    this.tempo = new Tempo;
  }

}

console.log('checking whats in tempo');
console.log(Tempo);

// Module exports for testing
module.exports = Sounds;
