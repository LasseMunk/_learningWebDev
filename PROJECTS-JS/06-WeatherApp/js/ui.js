class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.description = document.getElementById('w-desc');
    this.string = document.getElementById('w-string'); // temperature
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelslike = document.getElementById('w-feels-like');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.description.textContent = weather.weather[0].description;
    this.string = weather.main.temp;
    // this.tempMax.textContent = `Tempature Max: ${weather.main.temp_max}`;
    this.icon.setAttribute('src',`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`); // icon for showing the weather
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
    // this.dewpoint.textContent = `Relative Humidity: ${weather.main.humidity}`;
    this.feelslike.textContent = `Temp. Feels Like: ${ Math.round((weather.main.feels_like - 273.15) * 10) / 10 } C`; // Convert Kelvin to Celcius
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} Angle: ${weather.wind.deg} deg`;
    
  }
}