import { renderPosition } from './map-utils.js';

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
const ul = document.getElementById('map-list');

renderPosition(userTest, ul);

console.log();