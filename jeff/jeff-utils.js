// const backAwayButton = document.getElementById('back-to-park');

// backAwayButton.addEventListener('click', () => {
//     window.location = 
// });

export function chaosAudit(user) {

    const universalName = user.userName;

    // const nameString = userName.value;
    // console.log(nameString);
    // const universalName = nameString.toLowerCase();

    if (universalName === 'Ian' || universalName === 'Malcolm' || universalName === 'Jeff' || universalName === 'Goldblum') {
        window.location = './jeff/index.html';
    } else {
        window.location = './lab/index.html';
    }
}
