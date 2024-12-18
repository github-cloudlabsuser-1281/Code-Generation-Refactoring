const apiKey = 'YOUR_API_KEY';
const city = 'London';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

async function fetchWeather() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function displayWeather(data) {
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const weatherCondition = data.weather[0].description;

    console.log(`Temperature: ${temperature}°C`);
    console.log(`Humidity: ${humidity}%`);
    console.log(`Weather Condition: ${weatherCondition}`);
}

fetchWeather();