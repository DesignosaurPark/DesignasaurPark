export function chaosAudit(user) {
    const universalName = user.userName.toLowerCase();

    if (universalName === 'Ian' || universalName === 'Malcolm' || universalName === 'Jeff' || universalName === 'Goldblum') {
        window.location = './jeff/index.html';
    } else {
        window.location = './lab/index.html';
    }
}
