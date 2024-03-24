const today = Date.now();
const dayInMs = 84600000;
const visitorMessage = document.querySelector(".visitor-message");

let latestVisit = Number(window.localStorage.getItem("latestVisit")) || 0;

if (latestVisit === 0) {
	visitorMessage.textContent = `Welcome! Let us know if you have any questions.`;
}

else {
    const dateDiff = today - latestVisit;
    const daysSince = Math.round(dateDiff / dayInMs);

    if (daysSince < 1 ) {
        visitorMessage.textContent = `Back so soon! Awesome!`;
    }
    else if (daysSince === 1 )
    {
        visitorMessage.textContent = `You last visited ${daysSince} day ago.`;
    }
    else {
        visitorMessage.textContent = `You last visited ${daysSince} days ago.`;
    }
}

localStorage.setItem("latestVisit", today);