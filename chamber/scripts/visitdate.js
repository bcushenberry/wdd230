const today = Date.now();
const visitorMessage = document.querySelector(".visitor-message");
const dayInMs = 84600000;

let numVisits = Number(window.localStorage.getItem("totalVisits")) || 1;

let latestVisit = new Date();

if (numVisits == 1) {
	visitorMessage.textContent = `Welcome! Let us know if you have any questions.`;
}

else if ((today - latestVisit) < dayInMs) {
        visitorMessage.textContent = `Back so soon! Awesome!`;
}

else {
    let daysSince = (today - latestVisit) / dayInMs;
    console.log(daysSince);
    visitorMessage.textContent = `You last visited ${Math.floor(daysSince)} days ago.`;
}

numVisits++;
latestVisit = today;

localStorage.setItem("totalVisits", numVisits);
localStorage.setItem("latestVisit", latestVisit);