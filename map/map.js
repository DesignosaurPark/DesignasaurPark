import { renderPosition, renderTechnicalInfo } from './map-utils.js';
import { clamp, incrementRandomCoordinate } from '../utils.js';
import { getUser, setUser } from '../local-storage-utils.js';
import { stackRankTotals, renderDinosaur } from '../incubation/incubation-utils.js';
import { findByDinoId } from '../utils.js';

const user = getUser();

// const user = getUser();
const ul = document.getElementById('map-list');
const infoAreaContainerDiv = document.getElementById('info-area-container');
const userNotesTextarea = document.getElementById('user-notes');
const advanceDayButton = document.getElementById('advance-day');
const createAnotherButton = document.getElementById('create-another');

userNotesTextarea.placeholder = `Dr.${user.userName}'s notes`;
infoAreaContainerDiv.style.position = 'relative';

for (const dino of user.dinoArray) {
    renderPosition(dino, ul);
}

renderDots();

advanceDayButton.addEventListener('click', () => {
    
    infoAreaContainerDiv.textContent = '';
    ul.textContent = '';
    for (const dino of user.dinoArray) {
        dino.top = clamp((dino.top + incrementRandomCoordinate()), 10, 70);
        dino.left = clamp((dino.left + incrementRandomCoordinate()), 40, 70);
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

            const dino = findByDinoId(element.value, user.dinoArray);
            const rankArray = stackRankTotals(dino);
            const dinoImgElement = renderDinosaur(rankArray);

            dinoImgElement.lastChild.textContent = '';
            dinoImgElement.style.transform = 'scale(0.25)';
            dinoImgElement.style.position = 'absolute';
            dinoImgElement.style.left = '15%';
            dinoImgElement.style.top = '-5%';
            dinoImgElement.style.backgroundColor = 'limegreen';
            dinoImgElement.style.paddingTop = '50px';
            dinoImgElement.style.borderRadius = '100%';


            infoAreaContainerDiv.append(technicalInfoDiv, dinoImgElement);

        });
    }
    
}
