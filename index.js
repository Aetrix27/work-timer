var second = setInterval(runTimer, 1000);
var num = 60
var minutes = 25

function runTimer(){
    if (num>0){
        num--
        console.log(minutes+":"+num);
    }else if(num == 0){
        minutes--
        num=60
    }
    
}

runTimer();
//Express View Engine for Handlebars
//const exphbs  = require('express-handlebars');
//app.engine('handlebars', exphbs());
//app.set('view engine', 'handlebars');

