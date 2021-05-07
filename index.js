var second = setInterval(runTimer, 1000);
var num = 60
function runTimer(){
    num--
    console.log(num);
    
}

runTimer()
//Express View Engine for Handlebars
//const exphbs  = require('express-handlebars');
//app.engine('handlebars', exphbs());
//app.set('view engine', 'handlebars');

