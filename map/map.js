import { renderPosition, renderInfoOnClick } from './map-utils.js';
import { clamp, incrementRandomCoordinate } from '../utils.js';
import { getUser, setUser } from '../local-storage-utils.js';

const user = getUser();

const ul = document.getElementById('map-list');
const infoAreaContainerDiv = document.getElementById('info-area-container');
const userNotesTextarea = document.getElementById('user-notes');
const advanceDayButton = document.getElementById('advance-day');
const createAnotherButton = document.getElementById('create-another');
const galleryButton = document.getElementById('gallery');

userNotesTextarea.placeholder = `Dr.${user.userName}'s notes`;
infoAreaContainerDiv.style.position = 'relative';

// grab each dino and render a dinoIcon to map
for (const dino of user.dinoArray) {
    renderPosition(dino, ul);
}

// on dino click, update infoAreaDiv
renderInfoOnClick(infoAreaContainerDiv, user);

advanceDayButton.addEventListener('click', () => {
    // reset info area
    infoAreaContainerDiv.textContent = '';
    ul.textContent = '';
    // increment dino's stats and randomize position
    for (const dino of user.dinoArray) {
        if (dino.img !== '../assets/deadDinoHead.png'){
            dino.daysLived += 1;
            dino.top = clamp((dino.top + incrementRandomCoordinate()), 10, 70);
            dino.left = clamp((dino.left + incrementRandomCoordinate()), 40, 70);
        }
        //re render it
        renderPosition(dino, ul);
    }
    setUser(user);
    renderInfoOnClick(infoAreaContainerDiv, user);
});

createAnotherButton.addEventListener('click', () =>{
    window.location = '../lab';
});

galleryButton.addEventListener('click', () => {
    window.location = '../dino-gallery';
});

