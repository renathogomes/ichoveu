const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  const seiLAA = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`)
    .then((rest) => rest.json())
    .then((data) => data);

  if (seiLAA.length === 0) {
    return window.alert('Nenhuma cidade encontrada');
  }

  return console.log(seiLAA);
};

export const getWeatherByCity = (/* cityURL */) => {
//   seu código aqui
};
