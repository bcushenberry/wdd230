const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-desc');

// Current weather API call & DisplayResults
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.51&lon=-117.67&appid=41086effba2b865565713e85f2754937&units=imperial';
 
async function currentWeatherFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayCurrentWeather(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

function displayCurrentWeather(data) {
  currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  let capitalizedDesc = desc.charAt(0).toUpperCase() + desc.slice(1);
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', capitalizedDesc);
  captionDesc.textContent = `${capitalizedDesc}`;
}

// Forecast API call & DisplayResults
const forecasturl = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.51&lon=-117.67&appid=41086effba2b865565713e85f2754937&units=imperial';

async function forecastFetch() {
  try {
    const forecastresponse = await fetch(forecasturl);
    if (forecastresponse.ok) {
      const forecastdata = await forecastresponse.json();
      displayForecast(forecastdata);
    } else {
        throw Error(await forecastresponse.text());
    }
  } catch (error) {
      console.log(error);
  }
}

function displayForecast(forecastdata) {
  const threedayforecast = forecastdata.list.filter(f => f.dt_txt.includes('15:00:00'));
  console.log(threedayforecast);
  let day = 0;
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  threedayforecast.forEach((forecast) => {
    const d = new Date(forecast.dt_txt);
    document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
    document.getElementById(`forecast${day+1}`).innerHTML = `${forecast.main.temp_max.toFixed(0)}&deg;F`;
    day++;
  })
}

// Wind speed & Wind chill display
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

// Call APIs
currentWeatherFetch();
forecastFetch();