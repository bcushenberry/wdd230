const hamButton = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
	if (navigation.classList.contains('open')) {
		hamButton.textContent = "X";
	}
	else {
		hamButton.textContent = "☰";
	}
});
