
const noButton = document.querySelector('#no');

noButton.addEventListener('mouseover', () => {
	noButton.classList.add('fixed');
});

noButton.addEventListener('mouseout', () => {
	noButton.classList.remove('fixed');
});
