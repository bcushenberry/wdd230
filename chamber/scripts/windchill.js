const currentTemp = document.querySelector(".current-temp").textContent;
const windSpeed = document.querySelector(".wind-speed").textContent;

function calculateWindChill(temp, speed)
{
    return (35.74 + 0.6215 * currentTemp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * currentTemp * Math.pow(windSpeed, 0.16)).toFixed(2);
}


if (windSpeed > 3 && currentTemp <= 50)
{
    windChill = calculateWindChill(currentTemp, windSpeed);
    document.querySelector('.wind-chill').textContent = `${windChill}`;
}

else {
    document.querySelector('.wind-chill').textContent = `N/A`;
    document.querySelector('.wind-chill-units').textContent = ``;
}