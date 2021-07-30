const form = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");
const forecast = new Forecast();

const updateUI = (data) => {
    const {cityDet, weatherDet} = data;
    details.innerHTML = `
        <h5 class="my-3">${cityDet.EnglishName}</h5>
        <div class="my-3">${weatherDet.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weatherDet.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>`;
    let timeSrc = weatherDet.IsDayTime ? 'img/day.jpg' : 'img/night.svg';
    time.setAttribute("src", timeSrc);
    const iconSrc = `img/icons/${weatherDet.WeatherIcon}.svg`;
    icon.setAttribute("src", iconSrc);
    card.classList.remove("d-none");
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const cityName = form.city.value.trim();
    form.reset();
    forecast.getData(cityName)
        .then(data => updateUI(data))
        .catch(err => console.log(err))
    localStorage.city = cityName;
})

if (localStorage.city) {
    forecast.getData(localStorage.city)
        .then(data => updateUI(data))
        .catch(err => console.log(err))
}