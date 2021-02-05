import { renderPosition, renderDots } from './map-utils.js';
import { clamp, incrementRandomCoordinate } from '../utils.js';
import { getUser, setUser } from '../local-storage-utils.js';

const user = getUser();

// const user = getUser();
const ul = document.getElementById('map-list');
const infoAreaContainerDiv = document.getElementById('info-area-container');
const userNotesTextarea = document.getElementById('user-notes');
const advanceDayButton = document.getElementById('advance-day');
const createAnotherButton = document.getElementById('create-another');
const galleryButton = document.getElementById('gallery');

userNotesTextarea.placeholder = `Dr.${user.userName}'s notes`;
infoAreaContainerDiv.style.position = 'relative';

for (const dino of user.dinoArray) {
    renderPosition(dino, ul);
}

renderDots(infoAreaContainerDiv, user);

advanceDayButton.addEventListener('click', () => {
    
    infoAreaContainerDiv.textContent = '';
    ul.textContent = '';
    for (const dino of user.dinoArray) {
        if (dino.img !== '../assets/deadDinoHead.png'){
            dino.daysLived += 1;
            dino.top = clamp((dino.top + incrementRandomCoordinate()), 10, 70);
            dino.left = clamp((dino.left + incrementRandomCoordinate()), 40, 70);
        }
        renderPosition(dino, ul);
    }
    setUser(user);
    renderDots(infoAreaContainerDiv, user);
     
});

createAnotherButton.addEventListener('click', () =>{
    window.location = '../lab';
});

galleryButton.addEventListener('click', () => {
    window.location = '../dino-gallery';
});

