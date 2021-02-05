import { chaosAudit } from './jeff/jeff-utils.js';
import { getUser, setUser } from './local-storage-utils.js';

let user = getUser();
const userNameElement = document.getElementById('visitor-sign-in');

const securityScan = document.getElementById('security-scanner');

let i = 0;
let text = 'Please enter your name and then scan your thumbprint for security clearance:';
const speed = 50;

export function securityInstructions() {
    if (i < text.length) {
        document.getElementById('visitor-instructions').innerHTML += text.charAt(i);
        i++;
        setTimeout(securityInstructions, speed);
    }
}

securityInstructions();


export function grabAvatarImage() {
    const avatarChoice = document.querySelector('input:checked');

    if (avatarChoice.value === 'grant') {
        const selectedAvatar = 'assets/avatars/square-av_alan-grant.png';
        return selectedAvatar;
    }

    if (avatarChoice.value === 'sattler') {
        const selectedAvatar = 'assets/avatars/square-av_ellie-sattler.png';
        return selectedAvatar;
    }

    if (avatarChoice.value === 'malcolm') {
        const selectedAvatar = 'assets/avatars/square-av_ian-malcolm.png';
        return selectedAvatar;
    }
}


securityScan.addEventListener('click', () => {

    //const avatarChoice = document.querySelector('input:checked').value;
    const newAvatar = grabAvatarImage();

    if (!user) {
        const newUser = {
            userName: userNameElement.value,
            userAvatar: newAvatar,
            dinoArray: [
                {
                    dinoId: 0,
                    species: '',
                    tRexPercent: '',
                    triceratopsPercent: '',
                    pterodactylPercent: '',
                    name: '',
                    description: '',
                    img: '',
                    top: '',
                    left: '',
                }
            ]
        };
        setUser(newUser);
    }

    if (user) {
        setUser(user);
    }

    user = getUser(user);
    chaosAudit(user);
    //document.location.href = './lab/';

});




