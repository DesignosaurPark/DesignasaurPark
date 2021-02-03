import { renderPosition, renderTechnicalInfo } from './map-utils.js';

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
const userNotesP = document.getElementById('user-notes-name');

//let technicalInfoDiv = renderTechnicalInfo(user, ?)
let technicalInfoDiv = renderTechnicalInfo(userTest, 1);

//renderPosition(user, ul);
renderPosition(userTest, ul);

infoAreaContainerDiv.append(technicalInfoDiv);

