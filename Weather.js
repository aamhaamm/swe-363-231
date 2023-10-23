const API_KEY = '';

class City {
    constructor(name, fullName) {
        this.name = name;
        this.fullName = fullName;
    }
}

function fetchCitySuggestions() {
    const query = document.getElementById('cityInput').value;
    if (query.length < 3) {
        document.getElementById('suggestions').style.display = 'none';
        return;
    }

    fetch(`https://api.teleport.org/api/cities/?search=${query}`)
    .then(response => response.json())
    .then(data => {
        const suggestionsBox = document.getElementById('suggestions');
        suggestionsBox.innerHTML = '';
        const cities = [];
        data._embedded['city:search-results'].forEach(cityData => {
            const city = new City(cityData.matching_full_name.split(',')[0], cityData.matching_full_name);
            cities.push(city);
            const p = document.createElement('p');
            p.textContent = city.fullName;
            p.onclick = function() {
                document.getElementById('cityInput').value = city.name;
                suggestionsBox.style.display = 'none';
            };
            suggestionsBox.appendChild(p);
        });
        suggestionsBox.style.display = 'block';
    });
}

function getWeatherByInput() {
    const cityName = document.getElementById('cityInput').value.trim();
    if (!cityName) {
        document.getElementById('weatherInfo').innerHTML = "Please enter a city name.";
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.cod && data.cod !== 200) {
            throw new Error(data.message);
        }
        const weatherInfo = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
        document.getElementById('weatherInfo').innerHTML = weatherInfo;
    })
    .catch(error => {
        console.error("Error fetching weather data:", error);
        document.getElementById('weatherInfo').innerHTML = error.message;
    });
}
