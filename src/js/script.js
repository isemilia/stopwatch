import stopwatch from './modules/stopwatch';
import notes from './modules/notes';

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
    notes();
})
