export function chaosAudit(user) {

    const universalName = user.userName.toLowerCase();

    if (universalName === 'ian' || universalName === 'malcolm' || universalName === 'jeff' || universalName === 'goldblum') {
        window.location = './jeff/index.html';
    } else {
        window.location = './lab/index.html';
    }
}