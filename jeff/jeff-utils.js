// const backAwayButton = document.getElementById('back-to-park');

// backAwayButton.addEventListener('click', () => {
//     window.location = 
// });

export function chaosAudit(userName) {

    const universalName = str.toLowerCase(userName);

    if (universalName === 'ian' || universalName === 'malcom' || universalName === 'jeff' || universalName === 'goldblum') {
        window.location = './lab/index.html';
    } else {
        window.location = './jeff/index.html';
    }
}