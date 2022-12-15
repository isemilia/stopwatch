import stopwatch from './modules/stopwatch';
import notes from './modules/notes';

'use strict';

console.log('%cSpecial thanks to Ayush <3', 'color: red; font-size: 1.2em;');

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