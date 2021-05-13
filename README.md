# work-timer

This node module sets a timer in the terminal based on user input, and the user can start or stop the timer by pressing the space bar.
The number of minutes can be set by the user.

# Documentation

Call Timer by requiring the module and setting it to a variable. Then set the number of minutes as the parameter.

const { callTimer } = require('work-timer');

callTimer(1); //Starts the work timer for one minute.
