const goToLabButton = document.getElementById('go-to-lab');
const homeButton = document.getElementById('go-to-home');

goToLabButton.addEventListener('click', () => {
    document.location.href = '../lab/';
});

homeButton.addEventListener('click', () => {
    document.location.href = '../index.html';
});