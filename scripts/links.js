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
        let activityURL = document.createElement("a");
//        let link1 = week.links[0].url;
//        let title1 = week.links[0].title;

        weeklyLesson.textContent = `${week.lesson}: `;
//        activityURL.textContent = `${title1}`;
//        activityURL.setAttribute("href", link1);
        for (let i = 0; i < week.links.length; i++) {
            activityURL.textContent = `${week.links[i].title} | `;
            activityURL.setAttribute("href", week.links[i].url)
            weeklyLesson.appendChild(activityURL);
        }

        activityList.appendChild(weeklyLesson);
    });
}

getLinks();