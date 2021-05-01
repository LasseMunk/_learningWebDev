// Init storage
const storage = new Storage();
// get stored location data
const weatherLocation = storage.getLocationData();

// Initialize weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);

// Init UI
const ui = new UI();

// get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

// change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  // Change Location
  weather.changeLocation(city, country);

  // Set location in storage
  storage.setLocationData(city, country);

  // get and display weather
  getWeather();

  // close modal
  $('#locModal').modal('hide');
});


// weather.changeLocation('Copenhagen', 'DK');
function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}