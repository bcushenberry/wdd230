// Weekly banner for meet-and-greet
const banner = document.querySelector(".banner");
const currentDay = new Date();
let closeButton = document.querySelector('#banner-close');

if (currentDay.getDay() > 0 && currentDay.getDay() < 3) {
    banner.innerHTML ="<span id=\"banner-text\">Join this week's meet-and-greet at Ruby's on Wednesday @ 7:00pm!</span>";
}
else if (currentDay.getDay() === 3) {
    banner.innerHTML = "<span id=\"banner-text\">Join this week's meet-and-greet at Ruby's today @ 7:00pm!";
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