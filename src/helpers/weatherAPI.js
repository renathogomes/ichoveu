const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  try {
    const fetchApi = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`);
    const data = await fetchApi.json();

    if (data.length === 0) throw new Error('Nenhuma cidade encontrada');

    return data;
  } catch (erro) {
    window.alert(erro.message);
  }
};

export const getWeatherByCity = async (cityURL) => {
  const fetchApi = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${cityURL}}`);
  const data = await fetchApi.json();

  return {
    country: data.location.country,
    name: data.location.name,
    temp: data.current.temp_c,
    condition: data.current.condition.text,
    icon: data.current.condition.icon,
    url: cityURL,
  };
};

export const fetchButton = async (urlButton) => {
  const fetchLink = await fetch(`http://api.weatherapi.com/v1/forecast.json?lang=pt&key=${TOKEN}&q=${urlButton}&days=days=7`);
  const data = await fetchLink.json();
  const mapForecast = data.forecast.forecastday.map((forecast) => ({
    data: forecast.date,
    maxTemp: forecast.day.maxtemp_c,
    minTemp: forecast.day.mintemp_c,
    condition: forecast.day.condition.text,
    icon: forecast.day.condition.icon,
  }));

  return mapForecast;
};
