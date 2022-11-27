import stopwatch from './modules/stopwatch';

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    stopwatch({
        hoursSelector: '#hours',
        minutesSelector: '#minutes',
        secondsSelector: '#seconds',
        startTrigger: '#start',        
        splitTrigger: '#split',
        resetTrigger: '#reset',        
    });
})