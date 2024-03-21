// Weekly banner for meet-and-greet
const banner = document.querySelector(".banner");
const bannertext = document.querySelector("#banner-text")
const currentDay = new Date();
const closeButton = document.querySelector('#banner-close');

if (currentDay.getDay() > 0 && currentDay.getDay() < 3) {
    bannertext.textContent ="Join this week's meet-and-greet at Ruby's on Wednesday @ 7:00pm!";
}
else if (currentDay.getDay() === 3) {
    bannertext.textContent = "Join this week's meet-and-greet at Ruby's today @ 7:00pm!";
}
else {
    banner.remove();
}

closeButton.textContent = "X";
banner.append(closeButton);

closeButton.addEventListener('click', function()        
{
    banner.remove();
});