// import { getUser, setUser } from './local-storage-utils.js';
import { grabSum } from '../utils.js';
// import { compareSliderTotal() } from './lab-utils.js';

// On page load:
//     -structure is present
//     - grab DOM elements
//     -disable button

const dinoRangeTRex = document.getElementById('dnaTRex');
const dinoRangeTriceratops = document.getElementById('dnaTricera');
const dinoRangePterodactyl = document.getElementById('dnaPtero');

const tRexTotalLabel = document.getElementById('dnaTRexLabel');
const triceratopsTotalLabel = document.getElementById('dnaTriceratopsLabel');
const pterodactylTotalLabel = document.getElementById('dnaPterodactylLabel');

// on slider change (event listener)
dinoRangeTRex.addEventListener('change', () => {
    tRexTotalLabel.textContent = `Tyrannosaurus Rex DNA ${dinoRangeTRex.value}%`;
});

dinoRangeTriceratops.addEventListener('change', () => {
    triceratopsTotalLabel.textContent = `Triceratops Rex DNA ${dinoRangeTriceratops.value}%`;
});

dinoRangePterodactyl.addEventListener('change', () => {
    pterodactylTotalLabel.textContent = `Pterodactyl Rex DNA ${dinoRangePterodactyl.value}%`;
});



//     Show realtime % in feedback display
// grabSum(dinoRangeTRex.value, dinoRangeTriceratops.value, dinoRangePterodactyl.value);

//     -grab total of 3 %s (grabsum())

//     -compareSliderTotal() NEED TO WRITE
        // -compare total of 3 to 100
        // -if total >100%, stepDown last adjusted slider
            // give error toast message
        // If 100% - create button
// const labButton = document.getElementById('button');
// labButton.textContent = 'Incubate your Dinosaur';


// on button click (event listener)
//     -take in form data 
//     - const user object (check whether user exists with getUser())
//         -dino array within user - set top and left coordinates
//     -getRandomCoordinates()
//     -send to local storage (setUser())
//         -let dinoId = 0 (if only 1 dino)
//     -redirect to incubation page 
