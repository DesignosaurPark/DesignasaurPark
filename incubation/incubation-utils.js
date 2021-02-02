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



    const tRex = user.dinoArray[dinoArray.length - 1].tRexPercent;
    const triceratops = user.dinoArray[dinoArray.length - 1].triceratopsPercent;
    const pterodactyl = user.dinoArray[dinoArray.length - 1].pterodactylPercent;



    //first comparison checks to see which is highest
    //"if tRex is highest, return tRexHead...else"

    const maxPercent = Math.max



}