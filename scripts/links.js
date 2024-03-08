const baseURL = "https://bcushenberry.github.io/wdd230/";
const linksURL = "https://bcushenberry.github.io/wdd230/data/links.json";
const activityList = document.querySelector("#activitylist")

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
}

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let weeklyLesson = document.createElement("li");
        weeklyLesson.textContent = `${week.lesson}: `;

        for (let i = 0; i < week.links.length; i++) {

            if (i === 0) {
                let activityURL = document.createElement("a");

                activityURL.textContent = `${week.links[i].title} `;
                activityURL.setAttribute("href", week.links[i].url)

                weeklyLesson.appendChild(activityURL);
            }
            else {
                let newLine = document.createElement("li");
                newLine.innerHTML += "&emsp;&ensp; ";

                let activityURL = document.createElement("a");
                activityURL.textContent = `${week.links[i].title} `;
                activityURL.setAttribute("href", week.links[i].url)
                    
                newLine.appendChild(activityURL);
                weeklyLesson.appendChild(newLine);
            }
        }
        
        activityList.appendChild(weeklyLesson);
    });
}

getLinks();