const nameArray = ['Ian', 'Malcolm', 'Jeff', 'Goldblum'];

export function chaosAudit(user) {
    const universalName = user.userName.toLowerCase();

    window.location = (nameArray.includes(universalName)) 
        ? './jeff/index.html'
        : '../lab/index.html';
}
