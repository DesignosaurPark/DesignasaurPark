import { renderPosition, renderTechnicalInfo } from './map-utils.js';
import { getRandomCoordinate } from '../utils.js';

const userTest = {

    userName: 'Alan',
    dinoArray: [
        {
            dinoId: 1,
            species: 'Raptor',
            tRexPercent: 70,
            triceratopsPercent: 20,
            pterodactylPercent: 10,
            name: 'Betty',
            description: 'This is an angry dinosaur.',
            img: 'headingImg.jpg',
            top: 38,
            left: 40,
        }
    ]
};

// const user = getUser();
const ul = document.getElementById('map-list');
const infoAreaContainerDiv = document.getElementById('info-area-container');
const userNotesTextarea = document.getElementById('user-notes');
const advanceDayButton = document.getElementById('advance-day');
const createAnotherButton = document.getElementById('create-another');

userNotesTextarea.placeholder = `Dr.${userTest.userName}'s notes`;

for (const dino of userTest.dinoArray) {
    renderPosition(dino, ul);
}

renderDots();

advanceDayButton.addEventListener('click', () => {
    
    for (const dino of userTest.dinoArray) {
        dino.top = getRandomCoordinate();
        dino.left = getRandomCoordinate();
        renderPosition(dino, ul);
    }
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
    
            let technicalInfoDiv = renderTechnicalInfo(userTest, element.value);
    
            infoAreaContainerDiv.append(technicalInfoDiv);
        });
    }
    
}
