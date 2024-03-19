// Weekly banner for meet-and-greet
const banner = document.querySelector(".banner");
console.log(today.GetDay());
if (0 < today.getDay() < 3) {
    banner.textContent = "Join this week's meet-and-greet at Ruby's on Wednesday @ 7:00pm!";
}
else if (today.getDay() === 4) {
    banner.textContent = "Join this week's meet-and-greet at Ruby's today @ 7:00pm!";
}
else {
    banner.textContent = "";
}