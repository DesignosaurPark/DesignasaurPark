export function renderDinosaur(resultsArr) {
    // create array to hold our dino data descriptions for each piece
    let descriptionPieceArr = [];

    const dinoContainer = document.createElement('div');

    // loop through each result id, grab corresponding data obj. push obj.description to description Piece array, create and append img with obj.img as source.
    for (let result of resultsArr) {
        const DinoDataObj = findById(result);
        descriptionPieceArr.push(DinoDataObj.description);
        const dinoImg = document.createElement('img');
        dinoImg.src = `../assets/${DinoDataObj.img}`;
        dinoContainer.append(dinoImg);
    }

    const dinoDescription = document.createElement('p');

    const message = `Your Dinosaur is an ${descriptionPieceArr[0]} fellow. They are ${descriptionPieceArr[1]}. They can reach speeds up to ${descriptionPieceArr[2]}.`;

    dinoDescription.textContent = message;

    dinoContainer.append(dinoDescription);

    return dinoContainer;
}


export function stackRankTotals(user) {

    const dinoObject = user.dinoArray[user.dinoArray.length - 1];

    const tRex = dinoObject.tRexPercent;
    const triceratops = dinoObject.triceratopsPercent;
    const pterodactyl = dinoObject.pterodactylPercent;

    //const percentageArray = [tRex, triceratops, pterodactyl];



    //first comparison checks to see which is highest
    //"if tRex is highest, return tRexHead...else"

    const maxPercent = Math.max(tRex, triceratops, pterodactyl);
    console.log(maxPercent);
    let maxObjectKey = getKeyByValue(dinoObject, maxPercent);
    console.log(maxObjectKey);

    const minPercent = Math.min(tRex, triceratops, pterodactyl);
    let minObjectKey = getKeyByValue(dinoObject, minPercent);
    console.log(minObjectKey);

    const midPercent = (tRex + triceratops + pterodactyl) - minPercent - maxPercent;
    let midObjectKey = getKeyByValue(dinoObject, midPercent);
    console.log(midObjectKey);

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





    console.log(dinoBodyArray);
    return dinoBodyArray;


}


function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

//global object has a method called "keys" -- Object = object constructor