import { chaosAudit } from './jeff/jeff-utils.js';
import { getUser, setUser } from './local-storage-utils.js';

const user = getUser();
const userName = document.getElementById('visitor-sign-in');

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

securityScan.addEventListener('click', () => {

    if (!user) {
        const newUser = {
            userName: userName.value,
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

    chaosAudit(user);
    //document.location.href = './lab/';

});

