const key = 'NZYVTd4CzEcQbc0oDZckTylUjcQUjCEy';

const getWeather = async (city_code)=>{
    const url = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${city_code}?apikey=${key}`;
    const response = await fetch(url+query);
    const data = await response.json();
    return data[0];
}
const getCity = async (city) => {
    const url = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(url + query);
    const data = await response.json();
    return data[0];
}