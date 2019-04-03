var score = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
var bpm = 120;
var msInAMinute = 60000 / 4 ;// 4 ticks per beat
var note = 0;
var isPlaying = false;
var intState;

class Tempo{
  constructor(score,bpm,msInAMinute,note,isPlaying,intState) {
    this.score = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
    this.bpm = 120;
    this.msInAMinute = 60000 / 4;
    this.note = 0;
    this.intState = intState;
  }

  play(callback) {
    this.intState = setInterval(() => {
      // console.log(this.note);
      this.beat();
      callback && callback(); // For timing mocks
    }, this.msInAMinute/this.bpm);
  }

  toggle(index) {
    switch(this.score[index]) {
      case true:
        return this.score[index] = false;
      case false:
        return this.score[index] = true;
    }
  }

  beat() {
    // if (this.score[this.note] == true) {}
    this.note == 15 ? this.note = 0 : this.note += 1;
  }

  stop() {
    clearInterval(this.intState);
  }

}



///////////////////
// Module exports for testing

module.exports.Tempo = Tempo;
