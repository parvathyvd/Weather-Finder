class Weather{
    constructor(city){
        this.apiKey = '38dd5648930ac0da8d0c6d4d20957fc4';
        this.city = 'miami'
    }
    async getWeather(){
        const fetchWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);
        const weatherResponse  = await fetchWeather.json();
        return {
            weatherResponse
        }
    }
    changeLocation(city){
        this.city = city

    }
}