let i = 0;
let text = 'So you decided to name yourself after me? Good, uh, luck with that.';
const speed = 50;

export function jeffTyping() {
    if (i < text.length) {
        document.getElementById('jeff-text').innerHTML += text.charAt(i);
        i++;
        setTimeout(jeffTyping, speed);
    }
}

jeffTyping();

const backAwayButton = document.getElementById('back-to-park');

backAwayButton.addEventListener('click', () => {

    window.location = '../lab/index.html';

});

