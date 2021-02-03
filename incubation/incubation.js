import { renderDinosaur, stackRankTotals } from './incubation-utils.js';
//import data from '../dinoData.js';

const USER = 'USER';
const user = JSON.parse(localStorage.getItem(USER));

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

        const dinoBodyMix = stackRankTotals(user);

        const dinoReveal = renderDinosaur(dinoBodyMix);
        return dinoReveal;
    }



});



//redirect to map page
const releaseButton = document.getElementById('release-button');

releaseButton.addEventListener('click', (e) => {
    e.preventDefault();

    window.location = '../map/index.html';
});

