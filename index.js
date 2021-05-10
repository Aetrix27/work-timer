var timerInterval = setInterval(runTimer, 1000);
var keypress = require('keypress');
var num = 0
var minutes = 1


function runTimer(){
    if (num>0){
        num--
        console.log(minutes+":"+num);
    }else if (minutes == 0 && num == 0){
        console.log("TIME IS UP, TAKE A BREAK")
        clearInterval(timerInterval)
        return
    }else if(num == 0){
        console.log(minutes+": 00");
        minutes--
        num=60
    }
    
}

keypress(process.stdin);
 
// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
  console.log('got "keypress"', key);
  if (key && key.name == 'space') {
    process.stdin.pause();
  }
});
 
process.stdin.setRawMode(true);
process.stdin.resume();

runTimer();
//Express View Engine for Handlebars
//const exphbs  = require('express-handlebars');
//app.engine('handlebars', exphbs());
//app.set('view engine', 'handlebars');

