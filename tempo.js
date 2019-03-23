var score = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
var bpm = 120
var msInAMinute = 60000
var note = 0

function beat() {
  console.log(note);
  // toggle
  score[note] = toggle(score[note]);
  note += 1;
}

function toggle(boolean) {
  switch(boolean) {
    case true:
      return false;
    case false:
      return true;
  }
}

function play(callback) {
  setInterval(() => {
    beat();
    callback && callback();
  }, msInAMinute/bpm);
}

function stop() {
  clearInterval();
}

module.exports.toggle = toggle;
module.exports.score = score;
module.exports.beat = beat;
module.exports.play = play;
module.exports.stop = stop;
