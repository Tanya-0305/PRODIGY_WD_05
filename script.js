function getWeather() {
  const location = document.getElementById("locationInput").value;
  const apiKey = "898fd3e87e08f1a496b0406c8b98e2dc"; // Replace with your OpenWeatherMap API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      const weatherInfo = document.getElementById("weatherInfo");
      weatherInfo.innerHTML = `
        <h2>Current Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather Condition: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
      `;
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
      const weatherInfo = document.getElementById("weatherInfo");
      weatherInfo.innerHTML = "<p>Error fetching weather data. Please try again.</p>";
    });
}
