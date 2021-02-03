import { findByDinoId } from '../utils.js';
import { renderDinosaur, stackRankTotals } from './incubation-utils.js';
//import data from '../dinoData.js';

//const USER = 'USER';
//const user = JSON.parse(localStorage.getItem(USER));
const form = document.querySelector('form');


const hatchingSpace = document.getElementById('dino-container');
const eggImg = document.createElement('img');
eggImg.src = '../assets/green-egg-100.png';
const namedSpecies = document.getElementById('species-input');

hatchingSpace.append(eggImg);

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
        eggImg.style.display = 'none';

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

        const dinoContainer = document.getElementById('dino-container');
        const dinoReveal = renderDinosaur(dinoBodyMix);

        dinoContainer.append(dinoReveal);
    }
});

const formData = new FormData(form);
const selectionId = formData.get(namedSpecies);
console.log(selectionId);

//redirect to map page
const releaseButton = document.getElementById('release-button');

releaseButton.addEventListener('click', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const selectionId = formData.get(namedSpecies);
    console.log(selectionId);

    const choice = findById(selectionId, user.dinoArray);

    const uniqueDino = findByDinoId(dinoId, user.dinoArray);

    const newDinoSpecies =

        user.dinoArray.species =

        localStorage.setItem('USER', JSON.stringify(user));



    window.location = '../map/index.html';
});



// const formData = new FormData(form);
// const selectionId = formData.get('choices');
// const choice = findById(selectionId, quest.choices);

// const user = JSON.parse(localStorage.getItem(USER));

// const span = document.getElementById('choice-result');
// span.textContent = choice.result;


// user.health = user.health + choice.health;
// user.bounty = user.bounty + choice.bounty;
// user.completed[questId] = true;

// localStorage.setItem('USER', JSON.stringify(user));
