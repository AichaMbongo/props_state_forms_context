import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Europe } from './components/Europe';
import { WeatherProvider } from './components/WeatherProvider';

const App: React.FC = () => {
  return (
    <WeatherProvider>
      <Europe weather={''} />
    </WeatherProvider>
  )
}
export default App;
