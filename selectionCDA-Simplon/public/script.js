const blagueButton = document.getElementById('blague-button');

blagueButton.addEventListener('click', () => {
  fetch('https://selectioncda.onrender.com/blagues/random')
    .then((response) => response.json())
    .then((data) => {
      const blague = document.getElementById('blague');
      blague.innerHTML = data.blague;
    });
});
