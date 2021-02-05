import { renderDinosaur, stackRankTotals } from './incubation-utils.js';
import { getUser, setUser } from '../local-storage-utils.js';

const user = getUser();

const hatchingSpace = document.getElementById('dino-container');
const eggImg = document.createElement('img');
const chooseSpecies = document.getElementById('species-choice');
const namedSpecies = document.getElementById('species-input');
const speciesChooserBox = document.getElementById('species-chooser');
const releaseButton = document.getElementById('release-button');

eggImg.style.height = '300px';
chooseSpecies.style.display = 'none';
namedSpecies.style.display = 'none';
speciesChooserBox.style.display = 'none';

let dinoHeadImg = null;

eggImg.src = '../assets/egg1-whole.png';
hatchingSpace.append(eggImg);

//on page load:
//eggImgOne is visible, eggImgTwo is hidden
let eggCounter = 0;

eggImg.addEventListener('click', () => {

    eggCounter++;

    if (eggCounter === 1) {

        eggImg.src = '../assets/egg1-cracked.png';

    } else if (eggCounter === 2) {

        chooseSpecies.style.display = 'block';
        namedSpecies.style.display = 'block';
        speciesChooserBox.style.display = 'flex';
        eggImg.style.display = 'none';
        const dino = user.dinoArray[user.dinoArray.length - 1];

        const dinoBodyMix = stackRankTotals(dino);
        const dinoContainer = document.getElementById('dino-container');
        const dinoReveal = renderDinosaur(dinoBodyMix);
        dinoHeadImg = dinoReveal.firstChild.firstChild.src;
        dinoContainer.append(dinoReveal);

        releaseButton.classList.toggle('hidden');
    }
});

//set dinos species to user and redirect to map page:
releaseButton.addEventListener('click', (e) => {
    e.preventDefault();

    const dinosaur = user.dinoArray[user.dinoArray.length - 1];
    dinosaur.species = namedSpecies.value;
    dinosaur.img = dinoHeadImg;

    setUser(user);

    window.location = '../map/index.html';
});
