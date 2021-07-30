class Forecast {
    constructor() {
        this.key = 'NZYVTd4CzEcQbc0oDZckTylUjcQUjCEy';
        this.cityUrl = "https://dataservice.accuweather.com/currentconditions/v1/";
        this.weatherUrl = "https://dataservice.accuweather.com/locations/v1/cities/search";
    }

    getData = async (cityName) => {
        const cityDet = await this.getCity(cityName);
        const weatherDet = await this.getWeather(cityDet.Key);
        return {cityDet, weatherDet}
    }

    getWeather = async (city_code) => {
        const query = `${city_code}?apikey=${this.key}`;
        const response = await fetch(this.weatherUrl + query);
        const data = await response.json();
        return data[0];
    }

    getCity = async (city) => {
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityUrl + query);
        const data = await response.json();
        return data[0];
    }
}