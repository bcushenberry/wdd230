const hamButton = document.querySelector('#menu');
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

// Add dark mode
const modeButton = document.querySelector("#dark-mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.checked == true) {
		modeButton.textContent = "";
		main.style.background = "#000";
		main.style.color = "#fff";
	}
	
	else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.background = "#ccc"		
	}
});
