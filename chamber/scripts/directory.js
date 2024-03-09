const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");
const cards = document.querySelector(".cards");

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

// Call JSON file, populate the cards
const jsonFile = "data/members.json";
async function getDirectory() {
    const response = await fetch(jsonFile);
    const data = await response.json();
    displayDirectory(data.members);
};

const displayDirectory = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let logo = document.createElement("img");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");
        let memberlevel = document.createElement("p");

        name.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        website.textContent = `Website`;
        website.setAttribute("href", member.website);
        memberlevel.textContent = `Membership: ${member.membership}`

        logo.setAttribute("src", "images/" + member.icon);
        logo.setAttribute("alt", `The logo for ${member.name}`);
        logo.setAttribute("loading", "lazy");
//        logo.setAttribute("width", "300");
//        logo.setAttribute("height", "400");

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(website);
        card.appendChild(phone);
        card.appendChild(memberlevel);
        cards.appendChild(card);
    });
}

getDirectory();