import { findByDinoId } from '../utils.js';

export function renderPosition(newestDino, ul) {
    const dinoTop = newestDino.top;
    const dinoLeft = newestDino.left;
    const dinoId = newestDino.dinoId;

    const dot = document.createElement('img');
    dot.src = `${newestDino.img}`;
    dot.id = 'dot';
    dot.value = dinoId;
    dot.style.width = '45px';
    dot.style.height = 'auto';
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
    const dinoHp = document.createElement('span');
    const dinoSpecies = document.createElement('span');
    const dinoCoordinates = document.createElement('span');
    const dinoDescription = document.createElement('span');

    const dino = findByDinoId(dinoId, user.dinoArray);

    dinoName.textContent = `Name: ${dino.name} `;
    dinoHp.textContent = `Hp: ${dino.hp}`;
    dinoSpecies.textContent = `Species: ${dino.species} `;
    dinoCoordinates.textContent = `Coordinates: ${dino.top}N, ${dino.left}W `;
    dinoDescription.textContent = dino.description;

    div.append(dinoName, dinoHp, dinoSpecies, dinoCoordinates, dinoDescription);

    return div;
}

// export function dinoCollision(clickedDinoImg, dinoImgArray){
//     const clickedDinoBound = clickedDinoImg.getBoundingClientRect();
//     for (const dino of dinoImgArray) {
//         const comparedDinoBound = dino.getBoundingClientRect();
//         let collision = !(clickedDinoBound.right < comparedDinoBound.left || clickedDinoBound.left > comparedDinoBound.right && clickedDinoBound.bottom < comparedDinoBound.top || clickedDinoBound.top > comparedDinoBound.bottom);
//         console.log(clickedDinoBound.right, comparedDinoBound.left);
//         if (collision) return dino;
//     }
//     return null;
// }

export function dinoCollision(clickedDino, dinoArray) {
    for (const comparedDino of dinoArray) {
        if (comparedDino !== clickedDino){
            if (isWithinRange(clickedDino.top, comparedDino.top, 5) && isWithinRange(clickedDino.left, comparedDino.left, 5)) return comparedDino;
        }
    }
    return null;
}

function isWithinRange(value1, value2, range) {
    console.log(range, Math.abs(value1 - value2));
    if (Math.abs(value1 - value2) <= range) return true;
    return false;
}
