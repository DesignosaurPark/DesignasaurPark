import { clamp, findByDinoId } from '../utils.js';
import { stackRankTotals, renderDinosaur } from '../incubation/incubation-utils.js';

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
    const dinoDays = document.createElement('span');
    const dinoSpecies = document.createElement('span');
    const dinoCoordinates = document.createElement('span');
    const dinoDescription = document.createElement('span');

    const dino = findByDinoId(dinoId, user.dinoArray);

    dinoName.textContent = `Name: ${dino.name} `;
    dinoHp.textContent = `Hp: ${dino.hp}`;
    dinoDays.textContent = `Days Lived: ${dino.daysLived || 0}`;
    dinoSpecies.textContent = `Species: ${dino.species} `;
    dinoCoordinates.textContent = `Coordinates: ${dino.top}N, ${dino.left}W `;
    dinoDescription.textContent = dino.description;

    div.append(dinoName, dinoHp, dinoDays, dinoSpecies, dinoCoordinates, dinoDescription);

    return div;
}

export function dinoCollision(clickedDino, dinoArray) {
    for (const comparedDino of dinoArray) {
        if (comparedDino !== clickedDino){
            if (isWithinRange(clickedDino.top, comparedDino.top, 8) && isWithinRange(clickedDino.left, comparedDino.left, 8)) return comparedDino;
        }
    }
    return null;
}

function isWithinRange(value1, value2, range) {
    if (Math.abs(value1 - value2) <= range) return true;
    return false;
}

export function dinoFight(dino1, dino2) {
    const dino1Damage = Math.ceil(Math.random() * 60);
    const dino2Damage = Math.ceil(Math.random() * 40);
    let message = '';
   
    if (dino1.hp > 0 && dino2.img !== '../assets/deadDinoHead.png') dino1.hp -= dino2Damage;
    if (dino2.hp > 0 && dino1.img !== '../assets/deadDinoHead.png') dino2.hp -= dino1Damage;

    message = `${dino1.name} did ${dino1Damage} damage to ${dino2.name}. They did ${dino2Damage} back`;
    if (dino1.hp <= 0){
        message = `${dino1.name} was slain by ${dino2.name}`;
        dino1.img = '../assets/deadDinoHead.png';
    } 
    if (dino2.hp <= 0){
        message = `${dino2.name} was slain by ${dino1.name}`;
        dino2.img = '../assets/deadDinoHead.png';
    } 
    if (dino1.hp <= 0 && dino2.hp <= 0) {
        message = `${dino2.name} and ${dino1.name} slayed eachother`;
        dino2.img = '../assets/deadDinoHead.png';
        dino1.img = '../assets/deadDinoHead.png';
    }
    dino2.hp = clamp(dino2.hp, 0, 100);
    dino2.hp = clamp(dino2.hp, 0, 100);
    return message;
}

export function renderDots(infoAreaContainerDiv, user) {
    const allDots = document.querySelectorAll('#dot');
    
    for (let i = 0; i < allDots.length; i++) {
        const element = allDots[i];
        element.addEventListener('click', () => {
            infoAreaContainerDiv.textContent = '';
    
            let technicalInfoDiv = renderTechnicalInfo(user, element.value);

            const dino = findByDinoId(element.value, user.dinoArray);
            const rankArray = stackRankTotals(dino);
            const dinoImgElement = renderDinosaur(rankArray);

            const fightButton = document.createElement('button');
            const fightText = document.createElement('span');

            dinoImgElement.lastChild.textContent = '';
            dinoImgElement.style.transform = 'scale(0.25)';
            dinoImgElement.style.position = 'absolute';
            dinoImgElement.style.left = '40%';
            dinoImgElement.style.top = '-40%';
            dinoImgElement.style.backgroundColor = 'limegreen';
            dinoImgElement.style.paddingTop = '50px';
            dinoImgElement.style.borderRadius = '100%';


            infoAreaContainerDiv.append(technicalInfoDiv, dinoImgElement);
            const collisionDino = dinoCollision(dino, user.dinoArray);
            if (collisionDino){
                fightButton.textContent = `${dino.name}vs${collisionDino.name}?`;
                fightButton.addEventListener('click', () =>{
                    fightText.textContent = dinoFight(dino, collisionDino);
                    infoAreaContainerDiv.append(fightText);
                });
                infoAreaContainerDiv.append(fightButton);
            } 

        });
    }
    
}

