const cards = document.querySelector(".spotlights");

/*
<h3>Ruby's Diner</h3>
<p class="subtitle">Shooby dooby down to Ruby's!</p>
<p>ruby@rubys.com</p>
<p>(949) 555-5551</p>
*/

// Call JSON file, populate the cards
const jsonFile = "data/members.json";
async function getDirectory() {
    const response = await fetch(jsonFile);
    const data = await response.json();
    const spotlightMembers = data.members.filter(member => member.membership === "Gold" || member.membership === "Silver")
    displaySpotlight(spotlightMembers);
};

const displaySpotlight = (members) => {
    var selectedMembers = selectRandom(members);
    selectedMembers.forEach((member) => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let subtitle = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");

        name.textContent = `${member.name}`;
        subtitle.innerHTML = `<em>${member.subtitle}</em>`;
        phone.textContent = `${member.phone}`;
        website.innerHTML = `<strong>Website (link)</strong>`;
        website.setAttribute("href", member.website);

        card.appendChild(name);
        card.appendChild(subtitle);
        card.appendChild(phone);
        card.appendChild(website);
        cards.appendChild(card);
    });
}

function selectRandom(members) {
    for (let i = members.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [members[i], members[j]] = [members[j], members[i]];
    }
    return members.slice(0, 3);
}

getDirectory();