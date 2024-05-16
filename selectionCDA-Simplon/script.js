const blagueButton = document.getElementById('blague-button');

blagueButton.addEventListener('click', () => {
    fetch('https://blague.xyz/api/blagues/random')
        .then(response => response.json())
        .then(data => {
        const blague = data.blague;
        const blagueElement = document.getElementById('blagueText');
        blagueElement.innerHTML = blague;
        });
    });
