const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = (term) => {
  if (!term) {
    window.alert('Nenhuma cidade encontrada');
  }
  fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`)
    .then((rest) => rest.json())
    .then((data) => console.log(data));
};

export const getWeatherByCity = (/* cityURL */) => {
//   seu código aqui
};
