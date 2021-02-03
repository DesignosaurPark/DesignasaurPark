export function grabSum(numOne, numTwo, numThree) {

    let totalPercent = Number(numOne) + Number(numTwo) + Number(numThree);

    return totalPercent;
}

export function findById(id, array) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}

export function getRandomCoordinate() {
    return Math.ceil(Math.random() * 100);
}

export function incrementRandomCoordinate() {
    let moveAmount = Math.ceil(Math.random() * 10);
    moveAmount *= (Math.round(Math.random()) === 1) ? 1 : -1;
    return moveAmount;
}

export function clamp(num, min, max) {
    if (num <= min) return min;
    if (num >= max) return max;
    return num;
}

export function findByDinoId(dinoId, array) {
    for (let item of array) {
        if (item.dinoId === dinoId) {
            return item;
        }
    }
}

