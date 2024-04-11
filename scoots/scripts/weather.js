const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-desc');
const humidity = document.querySelector('#humidity');
const highTemp = document.querySelector('#high-temp');
const lowTemp = document.querySelector('#low-temp');
const feelsLike = document.querySelector('#feels-like');
const pressure = document.querySelector('#pressure');

// Weather banner declarations
const banner = document.querySelector(".banner");
const bannertext = document.querySelector("#banner-text")
const closeButton = document.querySelector('#banner-close');
closeButton.textContent = "X";
banner.append(closeButton);

closeButton.addEventListener('click', function()        
{
    banner.remove();
});

// Current weather API call & DisplayResults
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.42&lon=-86.92&appid=41086effba2b865565713e85f2754937&units=imperial';
 
async function apiFetch() {
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
  humidity.innerHTML = `${data.main.humidity}%`;
  highTemp.innerHTML = `${data.main.temp_max}&deg;F`;
  bannertext.innerHTML =`<strong>Today's high temperature in Cozumel: ${data.main.temp_max}&deg;F</strong>`;
  lowTemp.innerHTML = `${data.main.temp_min}&deg;F`;
  feelsLike.innerHTML = `${data.main.feels_like}&deg;F`;
  pressure.innerHTML = `${data.main.pressure} hPa`;

  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  let capitalizedDesc = desc.charAt(0).toUpperCase() + desc.slice(1);
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', capitalizedDesc);
  captionDesc.textContent = `${capitalizedDesc}`;
}

// Forecast API call & DisplayResults
const forecasturl = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.42&lon=-86.92&appid=41086effba2b865565713e85f2754937&units=imperial';

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
  const tomorrowforecast = forecastdata.list.filter(f => f.dt_txt.includes('15:00:00'));
  const tomorrowtemp = tomorrowforecast[0];
  document.getElementById("tomorrow-forecast").innerHTML = `${tomorrowtemp.main.temp_max.toFixed(0)}&deg;F`;
}

apiFetch();
forecastFetch();