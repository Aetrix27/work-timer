var timerInterval = setInterval(runTimer, 1000);
var stopped = false
var keypress = require('keypress');
var num = 0
var minutes = 1


function runTimer(){
    if(stopped == false){
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
    
}

keypress(process.stdin);
 
// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
  console.log('got "keypress"', key);
  if (key && key.name == 'space') {
    if(stopped == false){
        stopped = true
    }else if(stopped == true){
        stopped = false
    }
   
  }
});
 
process.stdin.setRawMode(true);
process.stdin.resume();

if (stopped == true){
    stopped = false
}

runTimer();
//Express View Engine for Handlebars
//const exphbs  = require('express-handlebars');
//app.engine('handlebars', exphbs());
//app.set('view engine', 'handlebars');

