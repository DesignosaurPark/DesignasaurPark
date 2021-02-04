import data from '../dinoData.js';
import { findById } from '../utils.js';

export function renderDinosaur(dinoPartIdArray) {
    // create array to hold our dino data descriptions for each piece
    let descriptionPieceArr = [];

    const dinoContainer = document.createElement('div');

    // loop through each result id, grab corresponding data obj. push obj.description to description Piece array, create and append img with obj.img as source.
    for (let id of dinoPartIdArray) {
        const DinoDataObj = findById(id, data);
        descriptionPieceArr.push(DinoDataObj.description);
        const dinoImg = document.createElement('img');
        dinoImg.src = `../assets/${DinoDataObj.img}`;
        dinoImg.style.display = 'flex';
        dinoImg.style.flexDirection = 'column';
        dinoImg.style.alignContent = 'center';
        dinoImg.style.justifyContent = 'center';
        dinoContainer.style.display = 'flex';
        dinoContainer.style.flexDirection = 'column';
        dinoContainer.append(dinoImg);
    }

    const dinoDescription = document.createElement('p');

    const message = `Your Dinosaur is ${descriptionPieceArr[0]} fellow. They are ${descriptionPieceArr[1]}. They can reach speeds up to ${descriptionPieceArr[2]}.`;

    dinoDescription.textContent = message;

    dinoContainer.append(dinoDescription);

    return dinoContainer;
}
//needs to return just the dinoContainer, not a string/outerHTML

export function stackRankTotals(user) {
    const dinoObject = user.dinoArray[user.dinoArray.length - 1];

    const tRex = dinoObject.tRexPercent;
    const triceratops = dinoObject.triceratopsPercent;
    const pterodactyl = dinoObject.pterodactylPercent;
    console.log(dinoObject);
    //"if tRex is highest, return tRexHead"
    const maxPercent = Math.max(tRex, triceratops, pterodactyl);
    let maxObjectKey = getKeyByValue(dinoObject, maxPercent);

    const minPercent = Math.min(tRex, triceratops, pterodactyl);
    let minObjectKey = getKeyByValue(dinoObject, minPercent);

    const midPercent = (tRex + triceratops + pterodactyl) - minPercent - maxPercent;
    let midObjectKey = getKeyByValue(dinoObject, midPercent);

    let dinoBodyArray = [];

    //determining the head id:
    if (dinoObject[maxObjectKey] === tRex) {
        dinoBodyArray.push('tRexHead');
    }
    if (dinoObject[maxObjectKey] === triceratops) {
        dinoBodyArray.push('triceratopsHead');
    }
    if (dinoObject[maxObjectKey] === pterodactyl) {
        dinoBodyArray.push('pterodactylHead');
    }

    //determining the torso id:
    if (dinoObject[midObjectKey] === tRex) {
        dinoBodyArray.push('tRexTorso');
    }
    if (dinoObject[midObjectKey] === triceratops) {
        dinoBodyArray.push('triceratopsTorso');
    }
    if (dinoObject[midObjectKey] === pterodactyl) {
        dinoBodyArray.push('pterodactylTorso');
    }

    //determining the legs id:
    if (dinoObject[minObjectKey] === tRex) {
        dinoBodyArray.push('tRexLegs');
    }
    if (dinoObject[minObjectKey] === triceratops) {
        dinoBodyArray.push('triceratopsLegs');
    }
    if (dinoObject[minObjectKey] === pterodactyl) {
        dinoBodyArray.push('pterodactylLegs');
    }
    console.log(tRex, triceratops, pterodactyl);
    console.log(minObjectKey, maxObjectKey, midObjectKey);
    return dinoBodyArray;
}


function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

//global object has a method called "keys" -- Object = object constructor