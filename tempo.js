var score = [false,false,false,false]
var bpm = 120
var millisecondsInAMinute = 60000
var note = 0

function beat() {
  if(note < score.length) {
    toggle(score[note]);
  }
}

function toggle(boolean) {
  switch(boolean) {
    case true:
      return false;
    case false:
      return true;
  }
}

window.setInterval(beat(), (bpm/millisecondsInAMinute));


module.exports.toggle = toggle;
module.exports.score = score;
module.exports.beat = beat;
