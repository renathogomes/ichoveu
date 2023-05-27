const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  const fetchApi = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`);
  const data = await fetchApi.json();

  if (data.length === 0) {
    return window.alert('Nenhuma cidade encontrada');
  }

  return data;
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
