export function compareSliderTotal(currentInput, totalScore) {
    if (totalScore > 100) {
        // -if total >100%, stepDown last adjusted slider
        currentInput.stepDown(Number(totalScore - 100));
        // give error toast message
        
    }
    if (totalScore === 100) {
        // If 100% - create button
        // const labButton = document.getElementById('button');
        // labButton.textContent = 'Incubate your Dinosaur';

    }
}