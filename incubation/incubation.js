//import { findByDinoId } from '../utils.js';
import { renderDinosaur, stackRankTotals } from './incubation-utils.js';
import { getUser, setUser } from '../local-storage-utils.js';
//import data from '../dinoData.js';

const user = getUser();

const hatchingSpace = document.getElementById('dino-container');
const eggImg = document.createElement('img');
const namedSpecies = document.getElementById('species-input');

eggImg.src = '../assets/green-egg-100.png';
hatchingSpace.append(eggImg);

//on page load:
//eggImgOne is visible, eggImgTwo is hidden
let eggCounter = 0;

eggImg.addEventListener('click', () => {

    eggCounter++;

    if (eggCounter === 1) {

        eggImg.src = '../assets/red-egg-100.png';

    } else if (eggCounter === 2) {

        eggImg.style.display = 'none';

        const dinoBodyMix = stackRankTotals(user);
        const dinoContainer = document.getElementById('dino-container');
        const dinoReveal = renderDinosaur(dinoBodyMix);

        dinoContainer.append(dinoReveal);
    }
});



//set dinos species to user and redirect to map page:

const releaseButton = document.getElementById('release-button');

releaseButton.addEventListener('click', (e) => {
    e.preventDefault();

    const dinosaur = user.dinoArray[user.dinoArray.length - 1];
    dinosaur.species = namedSpecies.value;

    setUser(user);

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
