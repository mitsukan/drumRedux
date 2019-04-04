const {Howl, Howler} = require('howler');

class Sounds{
  constructor(clap) {
    this.clap = new Howl({src: ['./audio/clap-0.4441ms.mp3']});
  }

}


// Module exports for testing
module.exports.Sounds = Sounds;
