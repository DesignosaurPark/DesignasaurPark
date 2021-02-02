import { findByDinoId } from '../utils.js';

export function renderPosition(user, ul) {
    const newestDino = user.dinoArray[user.dinoArray.length - 1];

    const dinoTop = newestDino.top;
    const dinoLeft = newestDino.left;

    const dot = document.createElement('img');
    dot.src = '../assets/black-dot.jpg';
    dot.style.width = '30px';
    dot.style.height = '30px';
    dot.style.top = `${dinoTop}%`;
    dot.style.left = `${dinoLeft}%`;
    dot.style.position = 'absolute';

    ul.append(dot);
}

export function renderTechnicalInfo(user, dinoId) {

    //spans for coordinates, species name, description (4)
    const div = document.createElement('div');
    div.id = 'technical-info';

    const dinoName = document.createElement('span');
    const dinoSpecies = document.createElement('span');
    const dinoCoordinates = document.createElement('span');
    const dinoDescription = document.createElement('span');

    const dino = findByDinoId(dinoId, user.dinoArray);

    dinoName.textContent = dino.name;
    dinoSpecies.textContent = dino.species;
    dinoCoordinates.textContent = `${dino.top}N, ${dino.left}W`;
    dinoDescription.textContent = dino.description;

    div.append(dinoName, dinoSpecies, dinoCoordinates, dinoDescription);

    return div.outerHTML;
}