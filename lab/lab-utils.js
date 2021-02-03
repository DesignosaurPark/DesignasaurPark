export function compareSliderTotal(currentInput, totalScore) {
    if (totalScore > 100) {
        // -if total >100%, stepDown last adjusted slider
        currentInput.stepDown(Number(totalScore - 100));
        // give error toast message
        alert('You have exceeded max DNA levels!');
    }
    if (totalScore === 100) {
        // If 100% - show button
        const labButton = document.getElementById('button');
        labButton.classList.add = 'button-show';
        labButton.textContent = 'Incubate your Dinosaur';

    }
}