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
      console.log(this.note);
      this.beat();
      callback && callback(); // For timing mocks
    }, this.msInAMinute/this.bpm);
  }

  toggle(boolean) {
    switch(boolean) {
      case true:
        return false;
      case false:
        return true;
    }
  }

  beat() {
    if(this.score[15] == true && this.note == 0) {this.score[15] = this.toggle(this.score[15])}
    this.score[this.note - 1] = this.toggle(this.score[this.note - 1])
    this.score[note] = this.toggle(this.score[this.note]);
    this.note == 15 ? this.note = 0 : this.note += 1;
  }
}

//////////////////////

function play(callback) {
  isPlaying = true;
  intState = setInterval(() => {
    console.log(note);
    beat();
    callback && callback(); // For timing mocks
  }, msInAMinute/bpm);
}

function stop() {
  clearInterval(intState);
}

//////////////////////////

function beat() {
  if(isPlaying == true) {
    if(score[15] == true && note == 0) {score[15] = toggle(score[15])}
    score[note - 1] = toggle(score[note - 1])
  }
  score[note] = toggle(score[note]);
  note == 15 ? note = 0 : note += 1;
}




///////////////////
// Module exports for testing

module.exports.score = score;
module.exports.beat = beat;
module.exports.play = play;
module.exports.stop = stop;
module.exports.Tempo = Tempo;
