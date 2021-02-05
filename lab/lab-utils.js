function toastFunction() {
    const toastMsg = document.getElementById('toast');
    toastMsg.className = 'show';
    toastMsg.textContent = `You have exceeded max DNA levels!`;
    setTimeout(function(){ toastMsg.className = toastMsg.className.replace('show', 'toast'); }, 2000);
}
export function compareSliderTotal(currentInput, totalScore) {
    if (totalScore > 100) {
// -if total >100%, stepDown last adjusted slider
        currentInput.stepDown(Number(totalScore - 100));
// give error toast message
        toastFunction();
        const labButton = document.getElementById('incubate-button');
        labButton.classList.toggle('hidden');
        labButton.textContent = 'Incubate your Dinosaur';
    }
}
