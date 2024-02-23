const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("totalVisits")) || 1;

if (numVisits == 1) {
	visitsDisplay.textContent = `First visit! 🥳 Thanks for coming!`;
} else {
    visitsDisplay.textContent = numVisits;
}

numVisits++;
localStorage.setItem("totalVisits", numVisits);