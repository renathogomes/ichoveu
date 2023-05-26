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

  const { current, location } = data;
  const { condition } = current;
  const { name, country } = location;

  const { text } = condition;

  return {
    country,
    name,
    temp: current.temp_c,
    condition: text,
    icon: condition.icon,
  };
};

/* name, country, url */
