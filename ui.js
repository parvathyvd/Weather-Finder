class UI{
    constructor(){
        this.country = document.getElementById('current-country');
        this.city = document.getElementById('current-city');
        this.currentLook = document.getElementById('current-condition');
        this.desc = document.getElementById('weather-desc');
        this.icon = document.getElementById('icon');
        this.temperature = document.getElementById('temp');
        this.pressure = document.getElementById('pressure');
        this.humidity = document.getElementById('humidity');
        this.feelsLike = document.getElementById('feels-like');
    }

    showWeatherUI(weather){
        console.log(`inside ui`, weather);

        this.country.textContent = weather.sys.country;
        this.city.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.currentLook.textContent = weather.weather[0].main;
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`)
        this.temperature.textContent = `Temperature ${weather.main.temp}F`;
        this.pressure.textContent = `Pressure ${weather.main.pressure}`;
        this.humidity.textContent = `Humidity ${weather.main.humidity}`;
        this.feelsLike.textContent = `Feels Like ${weather.main.feels_like}`;

       
        // "main": {
        //     "temp": 281.52,
        //     "feels_like": 278.99,
        //     "temp_min": 280.15,
        //     "temp_max": 283.71,
        //     "pressure": 1016,
        //     "humidity": 93
        //   },

    }
}