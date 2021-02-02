export function renderPosition(user, ul) {
    const newestDino = user.dinoArray[user.dinoArray.length - 1];

    const dinoTop = newestDino.top;
    const dinoLeft = newestDino.left;

    const dot = document.createElement('img');
    dot.src = '../assets/black-dot.jpg';
    dot.style.width = '30px';
    dot.style.height = '30px';
    dot.style.top = `${dinoTop}%`;
    dot.style.left = `${dinoLeft}%`;
    dot.style.position = 'absolute';

    ul.append(dot);
}

