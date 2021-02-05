import { getUser } from '../local-storage-utils.js';
import { stackRankTotals } from '../incubation/incubation-utils.js'; 
import { renderGalleryDino } from './dino-gallery-utils.js';

const mainSection = document.querySelector('section');
const user = getUser();

for (let i = 1; i < user.dinoArray.length; i++){
    let dino = user.dinoArray[i];
    const dinoRank = stackRankTotals(dino);
    const dinoName = dino.name;
    const dinoNameElement = document.createElement('p');
    dinoNameElement.textContent = dinoName || 'unnamed';
    const curDinoElement = renderGalleryDino(dinoRank);
    curDinoElement.append(dinoNameElement);
    mainSection.append(curDinoElement);
}

