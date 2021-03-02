import { clamp, findByDinoId } from '../utils.js';

export function renderPosition(newestDino, ul) {
    // grab dino coords and ID from local storage
    const dinoTop = newestDino.top;
    const dinoLeft = newestDino.left;
    const dinoId = newestDino.dinoId;

    //create map icon, adjust styling
    const dot = document.createElement('img');
    dot.src = `${newestDino.img}`;
    dot.id = 'dot';
    dot.value = dinoId;
    dot.style.width = '45px';
    dot.style.height = 'auto';
    //set map position to user storage
    dot.style.top = `${dinoTop}%`;
    dot.style.left = `${dinoLeft}%`;
    dot.style.position = 'absolute';

    ul.append(dot);
}

//
export function renderInfoOnClick(infoAreaContainerDiv, user) {
    // grab all icon elements
    const allDots = document.querySelectorAll('#dot');
    
    for (let i = 0; i < allDots.length; i++) {
        const element = allDots[i];
        //add event listener to each dot
        element.addEventListener('click', () => {
            infoAreaContainerDiv.textContent = '';
    
            let technicalInfoDiv = renderTechnicalInfo(user, element.value);

            const dino = findByDinoId(element.value, user.dinoArray);
        
            const fightButton = document.createElement('button');
            const fightText = document.createElement('span');

            infoAreaContainerDiv.append(technicalInfoDiv);
            //check if any dinos are nearby
            const collisionDino = dinoCollision(dino, user.dinoArray);
            //if so, add attack button and event listener
            if (collisionDino && collisionDino.name !== ''){
                fightButton.textContent = `Attack ${collisionDino.name}?`;
                fightButton.addEventListener('click', () =>{
                    // grab fight text and append to info area
                    fightText.textContent = dinoFight(dino, collisionDino);
                    infoAreaContainerDiv.append(fightText);
                });
                infoAreaContainerDiv.append(fightButton);
            }
        });
    }
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

    // grab dino by Id, then set spans to dino values
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
// if dinos are within range of eachother and both are alive, return nearby dino
export function dinoCollision(clickedDino, dinoArray) {
    for (const comparedDino of dinoArray) {
        if ((comparedDino !== clickedDino && comparedDino.hp > 0 && clickedDino.hp > 0)
                && isWithinRange(clickedDino.top, comparedDino.top, 8) 
                && isWithinRange(clickedDino.left, comparedDino.left, 8)
        ) return comparedDino;
    }
    return null;
}

// check if two values are within range
function isWithinRange(value1, value2, range) {
    return Math.abs(value1 - value2) <= range;
}

const deadDinoHeadUrl = '../assets/deadDinoHead.png';

// grab both dinos, and move through fight
export function dinoFight(dino1, dino2) {
    // generate random damage
    const dino1Damage = Math.ceil(Math.random() * 60);
    const dino2Damage = Math.ceil(Math.random() * 40);
    // if both dinos are alive
    // intereasting way of tracking state by checking the DOM! i'd rather see this state tracked sepoarately in case, for example, the filename changes one day. A bit of a maintainability issue there
    if (dino1.hp > 0 && dino2.img !== deadDinoHeadUrl) dino1.hp -= dino2Damage;
    if (dino2.hp > 0 && dino1.img !== deadDinoHeadUrl) dino2.hp -= dino1Damage;
    
    let message = `${dino1.name} did ${dino1Damage} damage to ${dino2.name}. They did ${dino2Damage} back`;
    //check health to see what dino won, change message accordingly
    if (dino1.hp <= 0){
        message = `${dino1.name} was slain by ${dino2.name}`;
        dino1.img = deadDinoHeadUrl;
    }
    if (dino2.hp <= 0){
        message = `${dino2.name} was slain by ${dino1.name}`;
        dino2.img = deadDinoHeadUrl;
    } 
    if (dino1.hp <= 0 && dino2.hp <= 0) {
        message = `${dino2.name} and ${dino1.name} slayed eachother`;
        dino2.img = deadDinoHeadUrl;
        dino1.img = deadDinoHeadUrl;
    }

    dino2.hp = clamp(dino2.hp, 0, 100);
    dino2.hp = clamp(dino2.hp, 0, 100); // does this need to happen twice for some reason?

    return message;
}
