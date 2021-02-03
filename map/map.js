import { renderPosition, renderTechnicalInfo } from './map-utils.js';
import { clamp, incrementRandomCoordinate } from '../utils.js';
import { getUser, setUser } from '../local-storage-utils.js';

const user = getUser();

// const user = getUser();
const ul = document.getElementById('map-list');
const infoAreaContainerDiv = document.getElementById('info-area-container');
const userNotesTextarea = document.getElementById('user-notes');
const advanceDayButton = document.getElementById('advance-day');
const createAnotherButton = document.getElementById('create-another');

userNotesTextarea.placeholder = `Dr.${user.userName}'s notes`;


for (const dino of user.dinoArray) {
    renderPosition(dino, ul);
}

renderDots();

advanceDayButton.addEventListener('click', () => {
    
    infoAreaContainerDiv.textContent = '';
    ul.textContent = '';
    for (const dino of user.dinoArray) {
        dino.top = clamp((dino.top + incrementRandomCoordinate()), 10, 90);
        dino.left = clamp((dino.left + incrementRandomCoordinate()), 30, 70);
        renderPosition(dino, ul);
    }
    setUser(user);
    renderDots();
     
});

createAnotherButton.addEventListener('click', () =>{
    window.location = '../lab';
});

function renderDots() {
    const allDots = document.querySelectorAll('#dot');
    
    for (let i = 0; i < allDots.length; i++) {
        const element = allDots[i];
        element.addEventListener('click', () => {
            infoAreaContainerDiv.textContent = '';
    
            let technicalInfoDiv = renderTechnicalInfo(user, element.value);
    
            infoAreaContainerDiv.append(technicalInfoDiv);
        });
    }
    
}
