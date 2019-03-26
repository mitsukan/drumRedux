var score = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
var bpm = 120;
var msInAMinute = 60000 / 4 ;// 4 ticks per beat
var note = 0;
var isPlaying = false;
var intState;

class Tempo{
  constructor(score,bpm,msInAMinute,note,isPlaying,intState) {
    this.score = score;
    this.bpm = bpm;
    this.msInAMinute = msInAMinute;
    this.note = note;
    this.isPlaying = isPlaying;
    this.intState = intState;
  }

  toggle(boolean) {
    switch(boolean) {
      case true:
        return false;
      case false:
        return true;
    }
  }
}

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
