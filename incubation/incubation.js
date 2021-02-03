import { renderDinosaur, stackRankTotals } from './incubation-utils.js';
//import data from '../dinoData.js';

//const USER = 'USER';
//const user = JSON.parse(localStorage.getItem(USER));







const hatchingSpace = document.getElementById('dino-container');
const eggImg = document.createElement('img');
eggImg.src = '../assets/green-egg-100.png';
const dinoLabelPrompt = document.createElement('label');


dinoLabelPrompt.textContent = `Enter your Dinosaur's species name:`;
hatchingSpace.append(eggImg, dinoLabelPrompt);

//on page load:
//eggImgOne is visible, eggImgTwo is hidden

let eggCounter = 0;

eggImg.addEventListener('click', () => {

    eggCounter++;

    if (eggCounter === 1) {
        //egg images are switched
        eggImg.src = '../assets/red-egg-100.png';
    } else if (eggCounter === 2) {

        //egg replaced with dino image
        eggImg.src = '../assets/e-flask_small.png';

        //test user until localStorage is online:
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
                    top: 35,
                    left: 40,
                }
            ]
        };

        const dinoBodyMix = stackRankTotals(userTest);
        console.log(dinoBodyMix);
        // const dinoBodyMix = [
        //     'tRexHead',
        //     'triceratopsTorso',
        //     'pterodactylLegs'
        // ];

        const dinoContainer = document.getElementById('dino-container');
        const dinoReveal = renderDinosaur(dinoBodyMix);
        console.log(dinoReveal);

        dinoContainer.append(dinoReveal);
        //grab dino-container from HTML and append dinoReveal into that
        //return dinoReveal;
    }



});



//redirect to map page
const releaseButton = document.getElementById('release-button');

releaseButton.addEventListener('click', (e) => {
    e.preventDefault();

    window.location = '../map/index.html';
});

