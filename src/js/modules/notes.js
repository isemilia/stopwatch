import {split} from './stopwatch';
import {getSeconds} from './stopwatch';

'use strict';

class Note {
    static id = 0;
    constructor(time, comment = '', gap = '', parentSelector) {
        this.time = time;
        this.comment = comment;
        this.gap = gap;
        this.parent = parentSelector;
    }
    render() {
        const item = `
        <div class="records-item">
            <div class="records-item-main">
                <div class="records-item-info" data-records-time>${this.time.hours}:${this.time.minutes}:${this.time.seconds}</div>
                <input type="text" class="records-item-comment" data-records-comment placeholder="comment" value="${this.comment}">
                <div class="records-item-info" data-records-gap>${this.gap}</div>
                </div>
                <a href="#" class="records-item-remove">
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.5 8H26.3333V4.93833C26.2903 3.76466 25.7837 2.65594 24.9245 1.8552C24.0654 1.05446 22.9238 0.627049 21.75 0.666662H16.25C15.0762 0.627049 13.9346 1.05446 13.0755 1.8552C12.2163 2.65594 11.7097 3.76466 11.6667 4.93833V8H2.5C2.01377 8 1.54745 8.19315 1.20363 8.53697C0.859818 8.88078 0.666664 9.3471 0.666664 9.83333C0.666664 10.3196 0.859818 10.7859 1.20363 11.1297C1.54745 11.4735 2.01377 11.6667 2.5 11.6667H4.33333V31.8333C4.33333 33.292 4.91279 34.691 5.94424 35.7224C6.97569 36.7539 8.37464 37.3333 9.83333 37.3333H28.1667C29.6254 37.3333 31.0243 36.7539 32.0558 35.7224C33.0872 34.691 33.6667 33.292 33.6667 31.8333V11.6667H35.5C35.9862 11.6667 36.4525 11.4735 36.7964 11.1297C37.1402 10.7859 37.3333 10.3196 37.3333 9.83333C37.3333 9.3471 37.1402 8.88078 36.7964 8.53697C36.4525 8.19315 35.9862 8 35.5 8ZM15.3333 4.93833C15.3333 4.645 15.7183 4.33333 16.25 4.33333H21.75C22.2817 4.33333 22.6667 4.645 22.6667 4.93833V8H15.3333V4.93833ZM30 31.8333C30 32.3196 29.8068 32.7859 29.463 33.1297C29.1192 33.4735 28.6529 33.6667 28.1667 33.6667H9.83333C9.3471 33.6667 8.88079 33.4735 8.53697 33.1297C8.19315 32.7859 8 32.3196 8 31.8333V11.6667H30V31.8333Z" fill="white"/>
                        <path d="M13.5 28.1667C13.9862 28.1667 14.4525 27.9735 14.7964 27.6297C15.1402 27.2859 15.3333 26.8196 15.3333 26.3333V19C15.3333 18.5138 15.1402 18.0475 14.7964 17.7036C14.4525 17.3598 13.9862 17.1667 13.5 17.1667C13.0138 17.1667 12.5474 17.3598 12.2036 17.7036C11.8598 18.0475 11.6667 18.5138 11.6667 19V26.3333C11.6667 26.8196 11.8598 27.2859 12.2036 27.6297C12.5474 27.9735 13.0138 28.1667 13.5 28.1667Z" fill="white"/>
                        <path d="M24.5 28.1667C24.9862 28.1667 25.4525 27.9735 25.7964 27.6297C26.1402 27.2859 26.3333 26.8196 26.3333 26.3333V19C26.3333 18.5138 26.1402 18.0475 25.7964 17.7036C25.4525 17.3598 24.9862 17.1667 24.5 17.1667C24.0138 17.1667 23.5474 17.3598 23.2036 17.7036C22.8598 18.0475 22.6667 18.5138 22.6667 19V26.3333C22.6667 26.8196 22.8598 27.2859 23.2036 27.6297C23.5474 27.9735 24.0138 28.1667 24.5 28.1667Z" fill="white"/>
                    </svg>
                </a>
            </div>
        </div>
        `;
    document.querySelector(this.parent).innerHTML += item;
    }
}

function createNoteElement(time, comment, gap) {
    const item = `
        <div class="records-item">
            <div class="records-item-main">
                <div class="records-item-info" data-records-time>${time.hours}:${time.minutes}:${time.seconds}</div>
                <input type="text" class="records-item-comment" data-records-comment placeholder="comment" value="${comment}">
                <div class="records-item-info" data-records-gap>${gap}</div>
                </div>
                <a href="#" class="records-item-remove">
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.5 8H26.3333V4.93833C26.2903 3.76466 25.7837 2.65594 24.9245 1.8552C24.0654 1.05446 22.9238 0.627049 21.75 0.666662H16.25C15.0762 0.627049 13.9346 1.05446 13.0755 1.8552C12.2163 2.65594 11.7097 3.76466 11.6667 4.93833V8H2.5C2.01377 8 1.54745 8.19315 1.20363 8.53697C0.859818 8.88078 0.666664 9.3471 0.666664 9.83333C0.666664 10.3196 0.859818 10.7859 1.20363 11.1297C1.54745 11.4735 2.01377 11.6667 2.5 11.6667H4.33333V31.8333C4.33333 33.292 4.91279 34.691 5.94424 35.7224C6.97569 36.7539 8.37464 37.3333 9.83333 37.3333H28.1667C29.6254 37.3333 31.0243 36.7539 32.0558 35.7224C33.0872 34.691 33.6667 33.292 33.6667 31.8333V11.6667H35.5C35.9862 11.6667 36.4525 11.4735 36.7964 11.1297C37.1402 10.7859 37.3333 10.3196 37.3333 9.83333C37.3333 9.3471 37.1402 8.88078 36.7964 8.53697C36.4525 8.19315 35.9862 8 35.5 8ZM15.3333 4.93833C15.3333 4.645 15.7183 4.33333 16.25 4.33333H21.75C22.2817 4.33333 22.6667 4.645 22.6667 4.93833V8H15.3333V4.93833ZM30 31.8333C30 32.3196 29.8068 32.7859 29.463 33.1297C29.1192 33.4735 28.6529 33.6667 28.1667 33.6667H9.83333C9.3471 33.6667 8.88079 33.4735 8.53697 33.1297C8.19315 32.7859 8 32.3196 8 31.8333V11.6667H30V31.8333Z" fill="white"/>
                        <path d="M13.5 28.1667C13.9862 28.1667 14.4525 27.9735 14.7964 27.6297C15.1402 27.2859 15.3333 26.8196 15.3333 26.3333V19C15.3333 18.5138 15.1402 18.0475 14.7964 17.7036C14.4525 17.3598 13.9862 17.1667 13.5 17.1667C13.0138 17.1667 12.5474 17.3598 12.2036 17.7036C11.8598 18.0475 11.6667 18.5138 11.6667 19V26.3333C11.6667 26.8196 11.8598 27.2859 12.2036 27.6297C12.5474 27.9735 13.0138 28.1667 13.5 28.1667Z" fill="white"/>
                        <path d="M24.5 28.1667C24.9862 28.1667 25.4525 27.9735 25.7964 27.6297C26.1402 27.2859 26.3333 26.8196 26.3333 26.3333V19C26.3333 18.5138 26.1402 18.0475 25.7964 17.7036C25.4525 17.3598 24.9862 17.1667 24.5 17.1667C24.0138 17.1667 23.5474 17.3598 23.2036 17.7036C22.8598 18.0475 22.6667 18.5138 22.6667 19V26.3333C22.6667 26.8196 22.8598 27.2859 23.2036 27.6297C23.5474 27.9735 24.0138 28.1667 24.5 28.1667Z" fill="white"/>
                    </svg>
                </a>
            </div>
        </div>
        `;
    // document.querySelector(parent).innerHTML += item;
    let tempWrap = document.createElement('div');
    tempWrap.innerHTML = item;
    return tempWrap.firstElementChild;
}

function renderLocalNotes(parentSelector) {
    const savedNoteItems = JSON.parse(localStorage.getItem('note-items'));
    savedNoteItems.forEach((note, i) => {
        // console.log(note);
        // console.log(createNoteElement(note.time, note.comment, note.gap));
        const noteElem = createNoteElement(note.time, note.comment, note.gap);
        noteElem.setAttribute('data-note-id', i);
        noteElem.querySelector('input').setAttribute('data-input-id', i);
        document.querySelector(parentSelector).append(noteElem);
    })
}

function scrollToBottom(containerSelector) {
    document.querySelector(containerSelector).scrollTop = document.querySelector(containerSelector).scrollHeight;
}

function notes() {
    const recordsWrap = document.querySelector('.records-wrap');
    let noteItems = [];
    if (localStorage.getItem('note-items')) {
        const savedNoteItems = JSON.parse(localStorage.getItem('note-items'));
        noteItems = [...noteItems, ...savedNoteItems];
        // console.log(noteItems);
        console.log(savedNoteItems);
        renderLocalNotes('.records-wrap');
        scrollToBottom('.records-wrap');
    }

    document.addEventListener('timerSplit', (e) => {
        const time = split(getSeconds());
        const newNote = new Note(time, '', '', '.records-wrap');
        noteItems.push(newNote);
        localStorage.setItem('note-items', JSON.stringify(noteItems));
        recordsWrap.innerHTML = '';
        noteItems.forEach((note, i) => {
            const noteElem = createNoteElement(note.time, note.comment, note.gap);
            noteElem.setAttribute('data-note-id', i);
            noteElem.querySelector('input').setAttribute('data-input-id', i);
            recordsWrap.append(noteElem);
        });
        scrollToBottom('.records-wrap');
    });

    recordsWrap.addEventListener('input', e => {
        console.log(e.target);
        const inputID = e.target.getAttribute('data-input-id');
        noteItems[inputID].comment = e.target.value;
        console.log(noteItems[inputID]);
        localStorage.setItem('note-items', JSON.stringify(noteItems));
    })

    document.addEventListener('timerReset', (e) => {
        noteItems = [];
        localStorage.removeItem('note-items');
        recordsWrap.innerHTML = '';
    });
}

export default notes;