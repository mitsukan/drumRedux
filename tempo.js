var score = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
var bpm = 120
var msInAMinute = 60000
var note = 0
var isPlaying = false

function play(callback) {
  isPlaying = true;
  setInterval(() => {
    beat();
    callback && callback(); // For timing mocks
  }, msInAMinute/bpm);
}

function stop() {
  clearInterval();
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

function toggle(boolean) {
  switch(boolean) {
    case true:
      return false;
    case false:
      return true;
  }
}



///////////////////
// Module exports for testing

module.exports.toggle = toggle;
module.exports.score = score;
module.exports.beat = beat;
module.exports.play = play;
module.exports.stop = stop;
