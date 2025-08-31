async function getWeather() {
  const city = document.getElementById("city").value;
  const resultEl = document.getElementById("result");

  if (!city) {
    resultEl.innerText = "Please enter a city.";
    return;
  }

  try {
    const response = await fetch(`https://weatherapp-yc3j.onrender.com/weather?city=${city}`);
    const data = await response.json();

    if (data.error) {
      resultEl.innerText = data.error;
      return;
    }

    resultEl.innerText = `Weather in ${data.city}: ${data.temperature}°C, ${data.description}`;
  } catch (err) {
    resultEl.innerText = "Error fetching weather.";
    console.error(err);
  }
}
