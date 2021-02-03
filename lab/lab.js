// import { getUser, setUser } from './local-storage-utils.js';
import { grabSum } from '../utils.js';
import { compareSliderTotal } from './lab-utils.js';

const dinoRangeTRex = document.getElementById('dnaTRex');
const dinoRangeTriceratops = document.getElementById('dnaTriceratops');
const dinoRangePterodactyl = document.getElementById('dnaPterodactyl');

const tRexTotalLabel = document.getElementById('dnaTRexLabel');
const triceratopsTotalLabel = document.getElementById('dnaTriceratopsLabel');
const pterodactylTotalLabel = document.getElementById('dnaPterodactylLabel');

//     -On change event for any range input - grab total of 3 %s 
document.querySelectorAll('.range-input').forEach(range => {
    range.addEventListener('change', (e) => {
        let tRexTotal = dinoRangeTRex.value;
        let triceratopsTotal = dinoRangeTriceratops.value;
        let pterodactylTotal = dinoRangePterodactyl.value;
        const currentRangeInput = e.target;

        let combinedTotal = grabSum(tRexTotal, triceratopsTotal, pterodactylTotal);

        compareSliderTotal(currentRangeInput, combinedTotal);

        //     Show realtime % in feedback display
        tRexTotal = dinoRangeTRex.value;
        triceratopsTotal = dinoRangeTriceratops.value;
        pterodactylTotal = dinoRangePterodactyl.value;
        let newTotal = grabSum(tRexTotal, triceratopsTotal, pterodactylTotal);
        
        const dnaTracker = document.getElementById('dna-tracker');
        dnaTracker.textContent = `${newTotal}% DNA resources used.`;
    });
});

// on slider change (event listener)
dinoRangeTRex.addEventListener('change', () => {
    tRexTotalLabel.textContent = `Tyrannosaurus Rex DNA ${dinoRangeTRex.value}%`;
});

dinoRangeTriceratops.addEventListener('change', () => {
    triceratopsTotalLabel.textContent = `Triceratops DNA ${dinoRangeTriceratops.value}%`;
});

dinoRangePterodactyl.addEventListener('change', () => {
    pterodactylTotalLabel.textContent = `Pterodactyl DNA ${dinoRangePterodactyl.value}%`;
});


// on button click (event listener)
const incubateButton = document.getElementById('incubate-button');
incubateButton.addEventListener('click', () => {
    //     -take in form data 
    // getUser(USER)
    //     if (!USER) {
    //         USER = ;
    //     }
    //     - const user object (check whether user exists with getUser())
    //         -dino array within user - set top and left coordinates
    //     -getRandomCoordinates()
    //     -send to local storage (setUser())
    // setUser()
    //         -let dinoId = 0 (if only 1 dino)
    //     -redirect to incubation page
    document.location.href = '../incubation/';
});