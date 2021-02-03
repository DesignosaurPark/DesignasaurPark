export function grabSum(numOne, numTwo, numThree) {

    let totalPercent = numOne + numTwo + numThree;

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

export function findByDinoId(dinoId, array) {
    for (let item of array) {
        if (item.dinoId === dinoId) {
            return item;
        }
    }
}

