import data from '../dinoData.js';
import { findById } from '../utils.js';

export function renderGalleryDino(dinoPartIdArray) {

    const dinoContainer = document.createElement('div');
    dinoContainer.style.display = 'flex';
    dinoContainer.style.flexDirection = 'column';
    dinoContainer.style.justifyContent = 'center';
    dinoContainer.style.alignItems = 'center';


    for (let id of dinoPartIdArray) {
        const DinoDataObj = findById(id, data);
        const dinoImg = document.createElement('img');
        dinoImg.src = `../assets/${DinoDataObj.img}`;
        dinoContainer.append(dinoImg);  
    }

    return dinoContainer;
    
}