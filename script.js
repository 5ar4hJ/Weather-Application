function displayData(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#displayed-city");
  cityElement.innerHTML = searchInputElement.value;
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", displayData);
