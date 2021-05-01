class Weather {
  constructor(city, country) {
    this.apiKey ='6624e76d874c5af1241d44e5ad2cf25e';
    this.city = city;
    this.country = country;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`);
    
    const responseData = await response.json();
    
    return responseData;
  }

  // change location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}