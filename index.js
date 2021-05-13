var keypress = require('keypress');

module.exports = function(minutes){ 

    var timerInterval = setInterval(runTimer, 1000);
    var stopped = false
    var num = 0

    function runTimer(){
        if(stopped == false){
            if (num>10){
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
            }else if(num <= 10 && num!=0){
                num--
                console.log(minutes+":0"+num);
        
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
    
    
}

//Module Test
module.exports(1)