// const backAwayButton = document.getElementById('back-to-park');

// backAwayButton.addEventListener('click', () => {
//     window.location = 
// });

export function chaosAudit(user) {

    const universalName = user.userName.toLowerCase();
    // const nameString = userName.value;
    // const universalName = nameString.toLowerCase();

    if (universalName === 'ian' || universalName === 'malcolm' || universalName === 'jeff' || universalName === 'goldblum') {
        window.location = './jeff/index.html';
    } else {
        window.location = './lab/index.html';
    }
}