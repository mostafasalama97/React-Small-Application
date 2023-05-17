// app.js
import './App.css';
import Weather from './Weather.jsx';
import Form from './Form.jsx';
import { useState } from 'react';

const ApiKey = 'e36ed364400282e43250b6c4c0274d44';

const App = () => {
  const [state, setState] = useState({
    temperature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  });

  const getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${ApiKey}`);
    const data = await api.json();

    if (city && country) {
      setState({
        temperature:  Math.round(data.main.temp - 273.15),
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      });
    } else {
      setState({
        temperature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        error: 'Please enter data'
      });
    }
  };

  return (
    <div className="App">
            <h1>Weather App</h1>

      <Form getWeather={getWeather} />
      <Weather
        temperature={state.temperature}
        city={state.city}
        country={state.country}
        humidity={state.humidity}
        description={state.description}
        error={state.error}
      />
    </div>
  );
};

export default App;
