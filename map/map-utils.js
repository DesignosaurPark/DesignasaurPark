import { findByDinoId } from '../utils.js';

export function renderPosition(newestDino, ul) {
    const dinoTop = newestDino.top;
    const dinoLeft = newestDino.left;
    const dinoId = newestDino.dinoId;

    const dot = document.createElement('img');
    dot.src = '../assets/black-dot.jpg';
    dot.id = 'dot';
    dot.value = dinoId;
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

    dinoName.textContent = `Name: ${dino.name} `;
    dinoSpecies.textContent = `Species: ${dino.species} `;
    dinoCoordinates.textContent = `Coordinates: ${dino.top}N, ${dino.left}W `;
    dinoDescription.textContent = dino.description;

    div.append(dinoName, dinoSpecies, dinoCoordinates, dinoDescription);

    return div;
}