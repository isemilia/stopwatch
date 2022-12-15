'use strict';

function stopwatch({hoursSelector, minutesSelector, secondsSelector, startTrigger, splitTrigger, resetTrigger}) {
    //stopwatch init
    const hours = document.querySelector(hoursSelector);
    const minutes = document.querySelector(minutesSelector);
    const seconds = document.querySelector(secondsSelector);
    const startBtn = document.querySelector(startTrigger);
    const splitBtn = document.querySelector(splitTrigger);
    const resetBtn = document.querySelector(resetTrigger);

    let i;

    if (getSeconds()) {
        i = getSeconds();
        updateTime(i);
    } else {
        i = 0;
    }

    function updateTime (s) {
        seconds.textContent = prependZero(s);
        if (s > 59) {
            seconds.textContent = prependZero(s%60);
            minutes.textContent = prependZero(Math.floor(s/60));
        }
        if (s > 3599) {
            minutes.textContent = prependZero(Math.floor(s/60)%60);
            hours.textContent = prependZero(Math.floor(s/(60*60)));
        }
    }

    const start = () => {
        i++;
        updateTime(i);
        return setInterval(() => { 
            updateTime(i);
            saveSeconds(i)
            i++; 
        }, 1000)
    };

    const stop = (interval) => clearInterval(interval);

    const reset = (interval) => {
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
        clearInterval(interval);
        i = 0;
    }

    // stopwatch controls

    let clickCount = 0;
    let interval;

    startBtn.addEventListener('click', (e) => {
        e.preventDefault();
        clickCount++;
        if (clickCount === 1) {
            interval = start();
            startBtn.textContent = 'Stop';
        } else if (clickCount === 2) {
            clickCount = 0;
            stop(interval);
            startBtn.textContent = 'Start';
        }
    });

    resetBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.dispatchEvent(new Event('timerReset'));
        reset(interval);
        if (startBtn.textContent === 'Stop') {
            startBtn.textContent = 'Start';
            clickCount = 0;
        }
        clearSeconds();
    });

    splitBtn.addEventListener('click', e => {
        e.preventDefault();
        // console.log(split(i));
        document.dispatchEvent(new Event('timerSplit'));
    });
}

function prependZero (n) {
    return n < 10 ? '0' + n : n;
} 

// let timesplit = new Event('split');

function split (s) {
    let res = {};
    res.hours = s > 3599 ? prependZero(Math.floor(s/3600)%60) : prependZero(Math.floor(s/3600));
    res.minutes = s > 59 ? prependZero(Math.floor(s/60)%60) : prependZero(Math.floor(s/60));
    res.seconds = s > 59 ? prependZero(s%60) : prependZero(s);
    // return `${res.hours}:${res.minutes}:${res.seconds}`;
    return res;
}

// save seconds in local storage
function saveSeconds(s) {
    localStorage.setItem('seconds', s);
}
// get seconds from local storage
function getSeconds() {
    return localStorage.getItem('seconds') ? localStorage.getItem('seconds') : 0;
}
//clear seconds
function clearSeconds() {
    localStorage.removeItem('seconds');
}

export default stopwatch;
export {split};
export {getSeconds};