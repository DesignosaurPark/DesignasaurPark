import { getUser, setUser } from '../local-storage-utils.js';
import { grabSum, getRandomCoordinate } from '../utils.js';
import { compareSliderTotal } from './lab-utils.js';

const user = getUser();
const greeting = document.getElementById('greeting');
const userName = document.getElementById('user-name');
const dinoName = document.getElementById('dino-name');

const dinoRangeTRex = document.getElementById('dnaTRex');
const dinoRangeTriceratops = document.getElementById('dnaTriceratops');
const dinoRangePterodactyl = document.getElementById('dnaPterodactyl');

const tRexTotalLabel = document.getElementById('dnaTRexLabel');
const triceratopsTotalLabel = document.getElementById('dnaTriceratopsLabel');
const pterodactylTotalLabel = document.getElementById('dnaPterodactylLabel');

const totalImage = document.getElementById('total-test-tube');
const incubateButton = document.getElementById('incubate-button');

// On load, pull in user name for greeting
getUser();
const greetingName = user.userName;
greeting.textContent = `Hello Dr. ${greetingName}`;

//On change event for any range input - grab total of 3 %s 
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

        // Update test-tube image based on total
        if (newTotal > 1 && newTotal < 5) {
            totalImage.src = '../assets/lab-images/test-tube-1.jpg';
        } else if (newTotal > 4 && newTotal < 35) {
            totalImage.src = '../assets/lab-images/test-tube-2.jpg';
        } else if (newTotal > 34 && newTotal < 65) {
            totalImage.src = '../assets/lab-images/test-tube-3.jpg';
        } else if (newTotal > 64 && newTotal < 100) {
            totalImage.src = '../assets/lab-images/test-tube-4.jpg';
        } else if (newTotal === 100) {
            totalImage.src = '../assets/lab-images/test-tube-5.jpg';
        }
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
incubateButton.addEventListener('click', () => {
    const coordinateTop = getRandomCoordinate();
    const coordinateLeft = getRandomCoordinate();


    if (!user) {
        const newUser = {
            userName: userName.value,
            dinoArray: [
                {
                    dinoId: 0,
                    species: '',
                    hp: 100,
                    daysLived: 0,
                    tRexPercent: Number(dinoRangeTRex.value),
                    triceratopsPercent: Number(dinoRangeTriceratops.value),
                    pterodactylPercent: Number(dinoRangePterodactyl.value),
                    name: dinoName.value,
                    description: '',
                    img: '',
                    top: coordinateTop,
                    left: coordinateLeft,
                }
            ]
        };
        setUser(newUser);
    }
    if (user) {
        const newDino = {
            dinoId: user.dinoArray[user.dinoArray.length - 1].dinoId + 1,
            species: '',
            hp: 100,
            daysLived: 0,
            tRexPercent: Number(dinoRangeTRex.value),
            triceratopsPercent: Number(dinoRangeTriceratops.value),
            pterodactylPercent: Number(dinoRangePterodactyl.value),
            name: dinoName.value,
            description: '',
            img: '',
            top: coordinateTop,
            left: coordinateLeft,
        };
        user.dinoArray.push(newDino);
        setUser(user);
    }
    document.location.href = '../incubation/';
});