function updateData(response) {
  let displayedTemp = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#displayed-city");
  let description = document.querySelector("#descriptor");
  let humidity = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let windSpeed = response.data.wind.speed;

  windSpeedElement.innerHTML = `${Math.round(windSpeed)}km/h`;
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  description.innerHTML = response.data.condition.description;
  cityElement.innerHTML = response.data.city;
  displayedTemp.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "o974f949a162ca8at386ecd74f5bc0de";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateData);
}

function displayData(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");

  searchCity(searchInputElement.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", displayData);

searchCity("Calgary");
